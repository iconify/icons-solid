import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/efmaas25o.css';
import '../../css/q/qq0qwkbww.css';
import '../../css/l/la2k6ib8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="efmaas25o"/><path class="qq0qwkbww"/><path class="la2k6ib8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:bag7"} {...others} />);
}

export default Component;
