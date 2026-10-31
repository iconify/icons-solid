import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ixjqv6b8v.css';
import '../../css/t/tmv9y_b2r.css';
import '../../css/h/h0sy7lv6l.css';
import '../../css/c/cm1yplbuf.css';
import '../../css/q/qt02m35xc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ixjqv6b8v wm-shadow"/><path class="tmv9y_b2r"/><path class="h0sy7lv6l"/><path class="cm1yplbuf"/><path class="qt02m35xc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:gold-ingot"} {...others} />);
}

export default Component;
