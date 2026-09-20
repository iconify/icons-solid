import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2y2jryfc.css';
import '../../css/x/xaraepzbq.css';
import '../../css/n/n1f55wtgp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m2y2jryfc"/><path class="xaraepzbq"/><path class="n1f55wtgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:apps-laptop-shield"} {...others} />);
}

export default Component;
