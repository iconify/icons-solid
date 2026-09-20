import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/o/o1--y-0bb.css';
import '../../css/t/tawj0nkcj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="o1--y-0bb"/><path class="tawj0nkcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mail-bolt"} {...others} />);
}

export default Component;
