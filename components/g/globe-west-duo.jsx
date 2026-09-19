import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vk2uwtblc.css';
import '../../css/n/nrjc2qb-u.css';
import '../../css/c/cq0hx26ww.css';
import '../../css/w/wo0ynd7fl.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="vk2uwtblc"/><path class="nrjc2qb-u"/><path class="cq0hx26ww"/><path class="wo0ynd7fl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:globe-west-duo"} {...others} />);
}

export default Component;
