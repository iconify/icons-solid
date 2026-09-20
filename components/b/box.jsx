import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/um8oggvox.css';
import '../../css/v/vfsj_cb5a.css';
import '../../css/c/c2nnz_bgd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="um8oggvox"/><path class="vfsj_cb5a"/><path class="c2nnz_bgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:box"} {...others} />);
}

export default Component;
