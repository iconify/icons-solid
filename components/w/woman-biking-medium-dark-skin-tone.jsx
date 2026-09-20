import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eztqw9biy.css';
import '../../css/w/w8-fl7qwf.css';
import '../../css/l/lgpyij31e.css';
import '../../css/b/brzn_0bpr.css';
import '../../css/y/yi-iv-bfc.css';
import '../../css/n/nzc_ikb8j.css';
import '../../css/y/y-n9g16jn.css';
import '../../css/m/mg29pp27j.css';
import '../../css/j/jx9jl26-u.css';
import '../../css/l/lww56bcgf.css';
import '../../css/p/pddz-k-uh.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="eztqw9biy"><circle class="w8-fl7qwf"/><path class="lgpyij31e"/></g><g class="brzn_0bpr"><circle class="yi-iv-bfc"/><circle class="nzc_ikb8j"/><path class="y-n9g16jn"/><circle class="mg29pp27j"/><path class="jx9jl26-u"/><path class="lww56bcgf"/><path class="pddz-k-uh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:woman-biking-medium-dark-skin-tone"} {...others} />);
}

export default Component;
