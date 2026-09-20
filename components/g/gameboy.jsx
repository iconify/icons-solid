import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ijbbsoypq.css';
import '../../css/k/kqpfjlbey.css';
import '../../css/m/m6vp56bkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="ijbbsoypq"/><path class="kqpfjlbey"/><path class="m6vp56bkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:gameboy"} {...others} />);
}

export default Component;
