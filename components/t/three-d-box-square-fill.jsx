import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wkcq33bll.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wkcq33bll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:three-d-box-square-fill"} {...others} />);
}

export default Component;
