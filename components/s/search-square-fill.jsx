import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pjodo-bjv.css';
import '../../css/e/ez5ds-_fw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pjodo-bjv"/><path class="ez5ds-_fw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:search-square-fill"} {...others} />);
}

export default Component;
