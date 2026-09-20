import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/etji4rahb.css';
import '../../css/z/z0vn0t1ke.css';
import '../../css/j/j_k1ii5uc.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="ft5dv1b6b"><rect class="etji4rahb"/><path clip-rule="evenodd" class="z0vn0t1ke"/><path class="j_k1ii5uc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"skill-icons:devto-dark"} {...others} />);
}

export default Component;
