import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/e/e7_pbtk1d.css';
import '../../css/u/ufvkgz_hq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><circle class="e7_pbtk1d"/><path class="ufvkgz_hq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:sun-duotone"} {...others} />);
}

export default Component;
