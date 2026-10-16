import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i40h72d1d.css';
import '../../css/c/coczllb-z.css';
import '../../css/j/j-estpbbv.css';
import '../../css/m/m6s19vg5i.css';
import '../../css/h/hgc4irbby.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i40h72d1d"/><path class="coczllb-z"/><path class="j-estpbbv"/><path class="m6s19vg5i"/><path class="hgc4irbby"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:assembly-point-20-bold"} {...others} />);
}

export default Component;
