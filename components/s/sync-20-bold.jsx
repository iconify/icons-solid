import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bhav9abqv.css';
import '../../css/v/vr9pgqgei.css';
import '../../css/a/anr8_0bbn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bhav9abqv"/><path class="vr9pgqgei"/><path class="anr8_0bbn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sync-20-bold"} {...others} />);
}

export default Component;
