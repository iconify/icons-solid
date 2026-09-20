import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rmbr7uw_z.css';
import '../../css/b/b_qi0n4ks.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/a/a5s25x-ys.css';
import '../../css/o/oictz6_3j.css';
import '../../css/b/bjm2xzb6q.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGGVFdJCnX" class="rmbr7uw_z"/></defs><use href="#SVGGVFdJCnX" class="b_qi0n4ks"/><g class="jn8qy4bru"><use href="#SVGGVFdJCnX"/><path class="a5s25x-ys"/><path class="oictz6_3j"/><path class="bjm2xzb6q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:lungs"} {...others} />);
}

export default Component;
