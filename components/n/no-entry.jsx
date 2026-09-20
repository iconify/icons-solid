import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ae849gbxa.css';
import '../../css/b/bwtkenb5i.css';
import '../../css/o/oy0s_htxh.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/u/uuzlah-2o.css';
import '../../css/n/nb6mbohli.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="ae849gbxa"><path class="bwtkenb5i"/><path class="oy0s_htxh"/></g><g class="ij2x_72vy"><path class="uuzlah-2o"/><path class="nb6mbohli"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:no-entry"} {...others} />);
}

export default Component;
