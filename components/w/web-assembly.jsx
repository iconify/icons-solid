import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulra56alq.css';
import '../../css/b/bys5gtajl.css';
import '../../css/m/ms4qewg_b.css';
import '../../css/v/vdav4blva.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="ulra56alq"><path class="bys5gtajl"/><path class="ms4qewg_b"/><path class="vdav4blva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:web-assembly"} {...others} />);
}

export default Component;
