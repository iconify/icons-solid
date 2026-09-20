import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/miclccyag.css';
import '../../css/x/x_a_cwb1g.css';
import '../../css/z/zdyze6bia.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="miclccyag"/><path clip-rule="evenodd" class="x_a_cwb1g"/><path class="zdyze6bia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:robot-solid"} {...others} />);
}

export default Component;
