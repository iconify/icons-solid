import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/whbuk40qj.css';
import '../../css/c/ctzipybbn.css';
import '../../css/o/oik4ogb9d.css';
import '../../css/h/hn99g3b2a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="whbuk40qj"/><path class="ctzipybbn"/><path class="oik4ogb9d"/><path class="hn99g3b2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:like-dislike"} {...others} />);
}

export default Component;
