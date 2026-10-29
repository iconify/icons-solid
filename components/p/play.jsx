import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y66tk2b3s.css';
import '../../css/b/bn0hr-51d.css';
import '../../css/n/nblhhoaam.css';
import '../../css/u/u-54s3bed.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k y66tk2b3s"/><path class="bn0hr-51d wm-k"/><path class="nblhhoaam wm-k"/><path class="u-54s3bed wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:play"} {...others} />);
}

export default Component;
