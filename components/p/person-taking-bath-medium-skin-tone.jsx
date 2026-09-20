import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zdayylbnh.css';
import '../../css/z/zy_jtubcb.css';
import '../../css/x/xujnnxbtr.css';
import '../../css/c/c8-ypxymo.css';
import '../../css/q/q067x5b1u.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/z/z4m9yddla.css';
import '../../css/h/ht7mivu3c.css';
import '../../css/n/nc1qjfkwi.css';
import '../../css/s/shy696bdg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="zdayylbnh"/><path class="zy_jtubcb"/><path class="xujnnxbtr"/><path class="c8-ypxymo"/><path class="q067x5b1u"/><g class="jn8qy4bru"><path class="z4m9yddla"/><path class="ht7mivu3c"/><path class="nc1qjfkwi"/><path class="shy696bdg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:person-taking-bath-medium-skin-tone"} {...others} />);
}

export default Component;
