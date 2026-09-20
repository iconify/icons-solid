import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vvp8ohbxt.css';
import '../../css/z/z1dlp4ywn.css';
import '../../css/o/oquifbbgx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vvp8ohbxt"/><path class="z1dlp4ywn"/><path class="oquifbbgx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:headphones-human"} {...others} />);
}

export default Component;
