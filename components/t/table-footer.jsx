import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kzgclubiw.css';
import '../../css/k/k8jrf-bba.css';
import '../../css/h/hcersch-s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kzgclubiw"/><rect transform="rotate(90 0 21.24)scale(-1 1)" class="k8jrf-bba"/><path class="hcersch-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:table-footer"} {...others} />);
}

export default Component;
