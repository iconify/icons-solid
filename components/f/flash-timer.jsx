import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sn8rrcblb.css';
import '../../css/f/fztijqbvq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="sn8rrcblb"/><path class="fztijqbvq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:flash-timer"} {...others} />);
}

export default Component;
