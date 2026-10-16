import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfzcs1bmb.css';
import '../../css/x/xf-7edb6n.css';
import '../../css/a/aw8zs8bon.css';
import '../../css/c/c65-ehvfy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vfzcs1bmb"/><path class="xf-7edb6n"/><path class="aw8zs8bon"/><path class="c65-ehvfy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:parliament-48"} {...others} />);
}

export default Component;
