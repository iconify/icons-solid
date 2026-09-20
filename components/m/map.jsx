import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yy3_swbuw.css';
import '../../css/q/q8bdfel-f.css';
import '../../css/u/uu30wbcov.css';
import '../../css/z/ze4ho7b7d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yy3_swbuw"/><path class="q8bdfel-f"/><path class="uu30wbcov"/><path class="ze4ho7b7d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:map"} {...others} />);
}

export default Component;
