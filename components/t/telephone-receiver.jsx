import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6k_wvbtn.css';
import '../../css/u/uox30dgvs.css';
import '../../css/u/u-9-purjb.css';
import '../../css/j/jn8qy4bru.css';

const viewBox = {"width":72,"height":72};
const content = `<defs><path id="SVGX9VWxbLU" class="k6k_wvbtn"/></defs><path class="uox30dgvs"/><path class="u-9-purjb"/><g class="jn8qy4bru"><use href="#SVGX9VWxbLU"/><use href="#SVGX9VWxbLU"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:telephone-receiver"} {...others} />);
}

export default Component;
