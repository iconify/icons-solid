import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/b/b3om0ubnr.css';
import '../../css/z/ztw77h30a.css';
import '../../css/k/k9g2oxbve.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="b3om0ubnr"/><path class="ztw77h30a"/><path class="k9g2oxbve"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:root-third-brecket"} {...others} />);
}

export default Component;
