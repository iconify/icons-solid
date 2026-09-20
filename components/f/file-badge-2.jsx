import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kz5pi1_xr.css';
import '../../css/j/jycqotayu.css';
import '../../css/z/zv6cqnbnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kz5pi1_xr"/><path class="jycqotayu"/><circle class="zv6cqnbnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-badge-2"} {...others} />);
}

export default Component;
