import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ed-_z6b5a.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lc5lxb17d.css';
import '../../css/r/rbohgvl9x.css';
import '../../css/u/udm6iph_s.css';
import '../../css/k/ky1-w1byj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ed-_z6b5a secondary"/><g class="dt0cm9dhy primary"><path class="lc5lxb17d"/><path class="rbohgvl9x"/><path class="udm6iph_s"/><path class="ky1-w1byj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:layers-merge-duo"} {...others} />);
}

export default Component;
