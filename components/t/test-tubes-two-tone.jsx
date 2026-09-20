import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z23h2kbhj.css';
import '../../css/o/oqeq4_wjs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z23h2kbhj"/><path class="oqeq4_wjs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:test-tubes-two-tone"} {...others} />);
}

export default Component;
