import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n7yr2gb8r.css';
import '../../css/i/if9yuik-y.css';
import '../../css/g/g3e_4lbfn.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="n7yr2gb8r"/><path class="if9yuik-y"/><path class="g3e_4lbfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:vitest"} {...others} />);
}

export default Component;
