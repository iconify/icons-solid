import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/awrvu0bnu.css';
import '../../css/w/w4cjl-9wk.css';
import '../../css/d/dd6avbu6q.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/u/usozxnbrm.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGUQMhJb5k" class="awrvu0bnu"/></defs><use href="#SVGUQMhJb5k"/><circle class="w4cjl-9wk"/><path class="dd6avbu6q"/><g class="jn8qy4bru"><circle class="usozxnbrm"/><use href="#SVGUQMhJb5k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:waxing-gibbous-moon"} {...others} />);
}

export default Component;
