import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rebt0moqu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rebt0moqu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:edit-pen"} {...others} />);
}

export default Component;
