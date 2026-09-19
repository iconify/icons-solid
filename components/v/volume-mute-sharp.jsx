import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv8ko8b5d.css';
import '../../css/s/sttlk4byq.css';
import '../../css/m/mgxiggbbe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gv8ko8b5d"/><path class="sttlk4byq"/><path class="mgxiggbbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:volume-mute-sharp"} {...others} />);
}

export default Component;
