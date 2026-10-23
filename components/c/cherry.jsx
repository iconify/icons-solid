import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fqycoacvw.css';
import '../../css/q/q_l1a336s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fqycoacvw"/><path class="q_l1a336s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:cherry"} {...others} />);
}

export default Component;
