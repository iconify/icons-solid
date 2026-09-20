import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rjhbwvqze.css';
import '../../css/b/bm295x_5y.css';
import '../../css/k/kp4yyebmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rjhbwvqze"/><path class="bm295x_5y"/><path class="kp4yyebmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:email-attachment-image"} {...others} />);
}

export default Component;
