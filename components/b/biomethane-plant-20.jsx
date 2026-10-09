import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ya43y5wia.css';
import '../../css/g/g0ni6vb5b.css';
import '../../css/r/r1okuabsg.css';
import '../../css/g/gfj36ibpb.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ya43y5wia"/><path class="g0ni6vb5b"/><path class="r1okuabsg"/><path class="gfj36ibpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:biomethane-plant-20"} {...others} />);
}

export default Component;
