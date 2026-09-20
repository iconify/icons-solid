import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tun2umbwx.css';
import '../../css/b/b2l0ek-ay.css';
import '../../css/h/hp92jekob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tun2umbwx"/><path class="b2l0ek-ay"/><path class="hp92jekob"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:night-moon-half-1"} {...others} />);
}

export default Component;
