import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jqizfzx9c.css';
import '../../css/t/t11oerbci.css';
import '../../css/k/k6spzkbhy.css';
import '../../css/e/e_ykywb7z.css';
import '../../css/k/k_ehq517i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jqizfzx9c wm-shadow"/><path class="t11oerbci"/><path class="k6spzkbhy"/><path class="e_ykywb7z"/><path class="k_ehq517i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:guitar"} {...others} />);
}

export default Component;
