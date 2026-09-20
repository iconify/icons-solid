import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dfp3vlhyg.css';
import '../../css/q/q4br58bfd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="dfp3vlhyg"/><path class="q4br58bfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:hearts-off"} {...others} />);
}

export default Component;
