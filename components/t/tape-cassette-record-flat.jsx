import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fs93ml2-w.css';
import '../../css/y/yrnpk4b6e.css';
import '../../css/j/jjlp30v-w.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fs93ml2-w"/><path clip-rule="evenodd" class="yrnpk4b6e"/><path class="jjlp30v-w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:tape-cassette-record-flat"} {...others} />);
}

export default Component;
