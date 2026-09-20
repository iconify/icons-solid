import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nif4azczd.css';
import '../../css/f/fdhrqg8rs.css';
import '../../css/z/zm5j3jtcy.css';
import '../../css/d/d3ya78b3j.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/x/x_t1mvbvs.css';
import '../../css/q/q23kucb9c.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="nif4azczd"><path class="fdhrqg8rs"/><path class="zm5j3jtcy"/><path class="d3ya78b3j"/></g><g class="jn8qy4bru"><path class="x_t1mvbvs"/><path class="q23kucb9c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:harp"} {...others} />);
}

export default Component;
