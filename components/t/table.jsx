import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bvoiwcq4f.css';
import '../../css/k/k8jrf-bba.css';
import '../../css/b/b7-2ylyww.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bvoiwcq4f"/><rect transform="rotate(90 0 21.24)scale(-1 1)" class="k8jrf-bba"/><path class="b7-2ylyww"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:table"} {...others} />);
}

export default Component;
