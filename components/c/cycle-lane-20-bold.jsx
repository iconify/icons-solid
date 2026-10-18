import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpooeybdt.css';
import '../../css/a/abplkpb0d.css';
import '../../css/m/mtg49db6l.css';
import '../../css/q/qyom500zq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hpooeybdt"/><path class="abplkpb0d"/><path class="mtg49db6l"/><path class="qyom500zq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cycle-lane-20-bold"} {...others} />);
}

export default Component;
