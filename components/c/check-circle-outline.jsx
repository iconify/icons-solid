import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vh5znhotu.css';
import '../../css/a/ayf976bbf.css';
import '../../css/t/tkfrl-bwu.css';
import '../../css/d/ddq-3fb3s.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vh5znhotu"/><path clip-rule="evenodd" class="ayf976bbf"/><path class="tkfrl-bwu"/><path clip-rule="evenodd" class="ddq-3fb3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:check-circle-outline"} {...others} />);
}

export default Component;
