import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ox2enz3rd.css';
import '../../css/g/gycyi0r7k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ox2enz3rd"/><path class="gycyi0r7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:sliders-24"} {...others} />);
}

export default Component;
