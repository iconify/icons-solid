import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/q/q62y9k48v.css';
import '../../css/l/lpotv0b1v.css';
import '../../css/v/vexzfqtjh.css';
import '../../css/k/kn6b-6b3d.css';
import '../../css/g/gripk0_4x.css';
import '../../css/z/zy5wd1-0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="t_2lkqbxb"><path class="q62y9k48v wm-shadow"/><path class="lpotv0b1v"/><path class="vexzfqtjh"/><path class="kn6b-6b3d"/><path class="gripk0_4x wm-shine"/><path class="wm-deco zy5wd1-0b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-sticker:aperture"} {...others} />);
}

export default Component;
