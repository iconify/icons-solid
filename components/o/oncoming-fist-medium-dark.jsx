import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wqdrz1bdh.css';
import '../../css/k/knxq6fbhq.css';
import '../../css/f/f2-j2bcof.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="wqdrz1bdh"/><path class="knxq6fbhq"/><path class="f2-j2bcof"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:oncoming-fist-medium-dark"} {...others} />);
}

export default Component;
