import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c9t5rfb5z.css';
import '../../css/t/tfnkjzb8p.css';
import '../../css/b/beziae8et.css';
import '../../css/j/jgfw_wbhi.css';
import '../../css/r/rqao90b6l.css';
import '../../css/u/u5tmx4bng.css';
import '../../css/p/pwwabbdwa.css';
import '../../css/j/jeyqzjnhx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c9t5rfb5z"/><path class="tfnkjzb8p"/><path class="beziae8et"/><path class="jgfw_wbhi"/><path class="rqao90b6l"/><path class="u5tmx4bng"/><path class="pwwabbdwa"/><path class="jeyqzjnhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wind-farm-alert-20-bold"} {...others} />);
}

export default Component;
