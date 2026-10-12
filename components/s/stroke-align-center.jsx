import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k__e5xjss.css';
import '../../css/r/r-_q9otsx.css';
import '../../css/y/yaa1odzmw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="k__e5xjss"/><path class="r-_q9otsx"/><path class="yaa1odzmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:stroke-align-center"} {...others} />);
}

export default Component;
