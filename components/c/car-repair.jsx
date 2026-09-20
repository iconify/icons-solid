import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbh2nacgo.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="hbh2nacgo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:car-repair"} {...others} />);
}

export default Component;
