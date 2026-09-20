import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xkyxzwb9q.css';
import '../../css/r/rjderz9hm.css';
import '../../css/n/nnadpqbsm.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="xkyxzwb9q"><path class="rjderz9hm"/><path class="nnadpqbsm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:arrow-curvy-up-down-2"} {...others} />);
}

export default Component;
