import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vpi92pwpd.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/u/u5mnzf2gv.css';
import '../../css/s/sgqd9obdh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary vpi92pwpd"/><g class="dt0cm9dhy primary"><path class="u5mnzf2gv"/><path class="sgqd9obdh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cone-duo"} {...others} />);
}

export default Component;
