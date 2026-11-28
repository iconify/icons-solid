import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l864zbosp.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/swm41ebxd.css';
import '../../css/r/rwtn5mbuu.css';
import '../../css/z/z8leietho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l864zbosp secondary"/><g class="dt0cm9dhy primary"><path class="swm41ebxd"/><path class="rwtn5mbuu"/><path class="z8leietho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:box-duo"} {...others} />);
}

export default Component;
