import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rta1vqbep.css';
import '../../css/e/eldc1fran.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rta1vqbep"/><path class="eldc1fran"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bel"} {...others} />);
}

export default Component;
