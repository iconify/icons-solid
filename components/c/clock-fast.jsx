import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x_dnedc0a.css';
import '../../css/z/zrzqsnbdu.css';
import '../../css/m/m0bfmobtd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="x_dnedc0a"/><path class="zrzqsnbdu"/><path class="m0bfmobtd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:clock-fast"} {...others} />);
}

export default Component;
