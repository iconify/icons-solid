import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/krzm0-bqz.css';
import '../../css/j/jafybqbqb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="krzm0-bqz"/><path class="jafybqbqb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:align-vertical-centers-solid"} {...others} />);
}

export default Component;
