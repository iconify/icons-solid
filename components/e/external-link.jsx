import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/w/wz9zxo4hl.css';
import '../../css/f/f9qm8fqzp.css';
import '../../css/y/y125glteo.css';
import '../../css/h/hr89acbnv.css';
import '../../css/m/mei7kab1r.css';
import '../../css/g/guh4dirje.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-shadow wz9zxo4hl"/><path class="f9qm8fqzp"/><path class="y125glteo"/><path class="hr89acbnv"/><path class="mei7kab1r"/><path class="guh4dirje"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:external-link"} {...others} />);
}

export default Component;
