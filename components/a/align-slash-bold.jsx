import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/af0f5krwx.css';
import '../../css/x/xwbtsryeu.css';

const viewBox = {"width":80,"height":81};
const content = `<g class="ft5dv1b6b"><path class="af0f5krwx"/><path class="xwbtsryeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:align-slash-bold"} {...others} />);
}

export default Component;
