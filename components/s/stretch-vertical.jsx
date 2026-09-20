import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x3wykd21z.css';
import '../../css/e/evcip965b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><rect class="x3wykd21z"/><rect class="evcip965b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:stretch-vertical"} {...others} />);
}

export default Component;
