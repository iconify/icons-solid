import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gxeo900vz.css';
import '../../css/x/xmonvmbep.css';
import '../../css/p/p543wbb6j.css';
import '../../css/w/w5qtwlbze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="gxeo900vz"/><path class="xmonvmbep"/><path class="p543wbb6j"/><path class="w5qtwlbze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:clapperboard"} {...others} />);
}

export default Component;
