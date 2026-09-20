import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/kqvci1mhd.css';
import '../../css/f/flecbyb4c.css';
import '../../css/n/nakdidb8l.css';
import '../../css/q/ql4fqpbas.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="kqvci1mhd"/><path clip-rule="evenodd" class="flecbyb4c"/><path class="nakdidb8l"/><path clip-rule="evenodd" class="ql4fqpbas"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:card-game-diamond"} {...others} />);
}

export default Component;
