import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/skdzxpg8m.css';
import '../../css/y/y47qa7but.css';
import '../../css/b/bfmdzqbts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="skdzxpg8m"/><path class="y47qa7but"/><path class="bfmdzqbts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:lock-time"} {...others} />);
}

export default Component;
