import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dj47mj-gb.css';
import '../../css/y/y3gnubf6a.css';
import '../../css/v/v-q851bmk.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="dj47mj-gb"/><path class="y3gnubf6a"/><path class="v-q851bmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:safety-vest"} {...others} />);
}

export default Component;
