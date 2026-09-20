import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0m25c.css';
import '../../css/q/qtqj_t.css';
import '../../css/u/uw82ng.css';
import '../../css/r/ricadr.css';
import '../../css/r/rqdeuu.css';
import '../../css/s/so-from-12.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a0m25c qtqj_t"/><path class="a0m25c uw82ng"/><path class="a0m25c ricadr"/><path class="a0m25c rqdeuu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:menu-unfold-right"} {...others} />);
}

export default Component;
