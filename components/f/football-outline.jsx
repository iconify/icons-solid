import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6xt5c87v.css';
import '../../css/n/n_fmt7b_d.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="j6xt5c87v"/><path class="n_fmt7b_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:football-outline"} {...others} />);
}

export default Component;
