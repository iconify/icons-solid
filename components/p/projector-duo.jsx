import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i58j_c0ir.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mcccz011g.css';
import '../../css/f/fnqnyblgp.css';
import '../../css/l/lzjuftnye.css';
import '../../css/l/laudgkbxt.css';
import '../../css/y/yi1m21xqm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i58j_c0ir secondary"/><g class="dt0cm9dhy primary"><path class="mcccz011g"/><path class="fnqnyblgp"/><path class="lzjuftnye"/><path class="laudgkbxt"/><path class="yi1m21xqm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:projector-duo"} {...others} />);
}

export default Component;
