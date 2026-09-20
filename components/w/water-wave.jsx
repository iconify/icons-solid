import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w937rx0-u.css';
import '../../css/y/ykvrlcbhl.css';
import '../../css/c/c9zr7ks1f.css';
import '../../css/v/v2hcyrboi.css';
import '../../css/d/doj9dq_jg.css';
import '../../css/v/vpcq2obcu.css';
import '../../css/a/aodw9rbdn.css';
import '../../css/s/shpmj8jnr.css';
import '../../css/f/f6_odkhvj.css';
import '../../css/h/h_cq3sixy.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="w937rx0-u"/><path class="ykvrlcbhl"/><path class="c9zr7ks1f"/><path class="v2hcyrboi"/><g class="doj9dq_jg"><path class="vpcq2obcu"/><path class="aodw9rbdn"/><path class="shpmj8jnr"/><path class="f6_odkhvj"/><path class="h_cq3sixy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:water-wave"} {...others} />);
}

export default Component;
