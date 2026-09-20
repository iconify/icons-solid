import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h787ojwew.css';
import '../../css/f/f4i11ifqk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h787ojwew"/><path class="f4i11ifqk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:book-up-2"} {...others} />);
}

export default Component;
