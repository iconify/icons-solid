import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/v4ycr6bwt.css';
import '../../css/q/qw-l2gf9m.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="v4ycr6bwt"/><path class="qw-l2gf9m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:music-note-circle"} {...others} />);
}

export default Component;
