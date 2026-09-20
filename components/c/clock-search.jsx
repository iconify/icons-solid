import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wk54p5bjl.css';
import '../../css/c/cgfsm2bzr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wk54p5bjl"/><path class="cgfsm2bzr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:clock-search"} {...others} />);
}

export default Component;
