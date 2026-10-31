import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kxo47_nbn.css';
import '../../css/f/fqx4c0b0g.css';
import '../../css/k/kha5ngbtu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="kxo47_nbn"/><path class="fqx4c0b0g"/><path class="kha5ngbtu wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:list-x"} {...others} />);
}

export default Component;
