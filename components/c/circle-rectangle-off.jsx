import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f3z8os9mj.css';
import '../../css/z/z5818pb7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f3z8os9mj"/><path class="z5818pb7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-rectangle-off"} {...others} />);
}

export default Component;
