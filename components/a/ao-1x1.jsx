import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nv9qcacyl.css';
import '../../css/c/cb2si3b8e.css';
import '../../css/a/a42d9893l.css';
import '../../css/i/i1rpdxu0t.css';
import '../../css/b/bircjebdb.css';
import '../../css/t/tom8t-shf.css';
import '../../css/h/h7pqmh51c.css';
import '../../css/u/u4j5tzb2e.css';
import '../../css/b/bv_s0jbfj.css';
import '../../css/h/h2jcx-d3n.css';

const viewBox = {"width":512,"height":512};
const content = `<g class="nv9qcacyl"><path class="cb2si3b8e"/><path class="a42d9893l"/></g><path class="i1rpdxu0t"/><path class="bircjebdb"/><path class="tom8t-shf"/><path class="h7pqmh51c"/><path class="u4j5tzb2e"/><path class="bv_s0jbfj"/><path class="h2jcx-d3n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:ao-1x1"} {...others} />);
}

export default Component;
