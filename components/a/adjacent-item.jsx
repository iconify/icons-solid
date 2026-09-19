import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kc784jy4i.css';
import '../../css/d/d-7w0ebsy.css';
import '../../css/c/cri_8d0jy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="kc784jy4i"/><path class="d-7w0ebsy"/><path class="cri_8d0jy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:adjacent-item"} {...others} />);
}

export default Component;
