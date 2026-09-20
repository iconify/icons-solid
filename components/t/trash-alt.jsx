import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfrikpbvv.css';
import '../../css/e/etxysdbfh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dfrikpbvv"/><path class="etxysdbfh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:trash-alt"} {...others} />);
}

export default Component;
