import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/ya6370b_w.css';
import '../../css/l/l55qfdbrr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="ya6370b_w"/><path class="l55qfdbrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:tent-tree"} {...others} />);
}

export default Component;
