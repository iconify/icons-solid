import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ta6eyqbdc.css';
import '../../css/f/fz0963b-c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ta6eyqbdc"/><path class="fz0963b-c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:git-branch-plus"} {...others} />);
}

export default Component;
