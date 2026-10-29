import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/ab_9pivlh.css';
import '../../css/q/q42xo2b2p.css';
import '../../css/b/bk04fhbuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="ab_9pivlh"/><path class="q42xo2b2p wm-a"/><path class="bk04fhbuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:sun-dim-duo"} {...others} />);
}

export default Component;
