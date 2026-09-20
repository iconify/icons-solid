import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/omitv2byq.css';
import '../../css/s/s6gb733yj.css';
import '../../css/g/g1kqfibni.css';
import '../../css/x/xy5e245oe.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="omitv2byq"/><path class="s6gb733yj"/><path class="g1kqfibni"/><path class="xy5e245oe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:freecad"} {...others} />);
}

export default Component;
