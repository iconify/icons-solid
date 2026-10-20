import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/ffvvcdbwj.css';
import '../../css/z/zo4h-60oq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ffvvcdbwj"/><circle class="zo4h-60oq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:smartphone-user-round"} {...others} />);
}

export default Component;
