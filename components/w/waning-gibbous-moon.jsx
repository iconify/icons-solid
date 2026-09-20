import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulqv-3scp.css';
import '../../css/w/w4cjl-9wk.css';
import '../../css/t/t9n169xkc.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/usozxnbrm.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGV7zeQdEC" class="ulqv-3scp"/></defs><use href="#SVGV7zeQdEC"/><circle class="w4cjl-9wk"/><path class="t9n169xkc"/><g class="jn8qy4bru"><circle class="usozxnbrm"/><use href="#SVGV7zeQdEC"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:waning-gibbous-moon"} {...others} />);
}

export default Component;
