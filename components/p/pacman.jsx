import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pvjqrqbfb.css';
import '../../css/b/bpj4ctbvy.css';
import '../../css/l/lw4f_abbw.css';
import '../../css/x/x-yblppwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="pvjqrqbfb"/><path class="bpj4ctbvy"/><path class="lw4f_abbw"/><path class="x-yblppwf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber-color:pacman"} {...others} />);
}

export default Component;
