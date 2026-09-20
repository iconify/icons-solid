import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wwc9rikkw.css';
import '../../css/h/hgij-5qau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wwc9rikkw"/><path class="hgij-5qau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:ticket-star"} {...others} />);
}

export default Component;
