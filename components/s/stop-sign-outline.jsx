import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vn6abgphj.css';
import '../../css/t/t1skd0btf.css';
import '../../css/z/zymhpuznl.css';
import '../../css/i/il0c7wlxf.css';
import '../../css/d/dakxuccsp.css';
import '../../css/e/e34u2grox.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vn6abgphj"/><path clip-rule="evenodd" class="t1skd0btf"/><path clip-rule="evenodd" class="zymhpuznl"/><path class="il0c7wlxf"/><path clip-rule="evenodd" class="dakxuccsp"/><path clip-rule="evenodd" class="e34u2grox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:stop-sign-outline"} {...others} />);
}

export default Component;
