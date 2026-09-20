import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qm26z0bbm.css';
import '../../css/s/s-bqbjbdh.css';
import '../../css/i/i6lqbg00h.css';
import '../../css/i/iat1-6b6t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qm26z0bbm"/><path class="s-bqbjbdh"/><path class="i6lqbg00h"/><path class="iat1-6b6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:harddrive-disk-download-3"} {...others} />);
}

export default Component;
