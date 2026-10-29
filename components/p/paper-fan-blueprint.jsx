import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/og9ildkeh.css';
import '../../css/z/z9gb2fb8o.css';
import '../../css/e/e06_x0bls.css';
import '../../css/y/y8qk8cbco.css';
import '../../css/u/uqmhopbvw.css';
import '../../css/d/d16uxrb5v.css';
import '../../css/d/dup0jybzp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="og9ildkeh wm-deco"/><path class="wm-deco z9gb2fb8o"/><path class="e06_x0bls wm-deco"/><path class="wm-k y8qk8cbco"/><path class="uqmhopbvw wm-a"/><path class="d16uxrb5v wm-s"/><path class="dup0jybzp wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paper-fan-blueprint"} {...others} />);
}

export default Component;
