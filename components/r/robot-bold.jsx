import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/veqd807dt.css';
import '../../css/t/tyhxbenkf.css';
import '../../css/q/qy8haab0a.css';
import '../../css/y/yfya-zbtz.css';
import '../../css/d/dh4-8zbhw.css';
import '../../css/k/kxwc09z8q.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="veqd807dt"/><path clip-rule="evenodd" class="tyhxbenkf"/><rect class="qy8haab0a"/><path clip-rule="evenodd" class="yfya-zbtz"/><path class="dh4-8zbhw"/><rect class="kxwc09z8q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:robot-bold"} {...others} />);
}

export default Component;
