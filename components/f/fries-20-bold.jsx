import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/anhhz7k0l.css';
import '../../css/t/tmt5_jlxd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="anhhz7k0l"/><path class="tmt5_jlxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:fries-20-bold"} {...others} />);
}

export default Component;
