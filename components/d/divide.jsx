import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yahd9lb9e.css';
import '../../css/o/ojtwtqbmw.css';
import '../../css/i/iljw3zavc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yahd9lb9e"/><path class="ojtwtqbmw"/><path class="iljw3zavc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:divide"} {...others} />);
}

export default Component;
