import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vttvgz3jw.css';
import '../../css/j/jgo86ngtk.css';
import '../../css/q/qvna00d1i.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="y9tr6bcfx"><path class="vttvgz3jw"/><path class="jgo86ngtk"/><path class="qvna00d1i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:target"} {...others} />);
}

export default Component;
