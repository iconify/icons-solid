import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/su2fj2bbc.css';
import '../../css/k/ksiw30c1e.css';
import '../../css/h/hfunc-u9d.css';
import '../../css/v/vm6ftdb4b.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="su2fj2bbc"/><path class="ksiw30c1e"/><path class="hfunc-u9d"/><path class="vm6ftdb4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:leaf-x-20"} {...others} />);
}

export default Component;
