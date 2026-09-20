import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qjql2tbsq.css';
import '../../css/o/o1cj845kj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qjql2tbsq"/><path class="o1cj845kj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scan-text-duotone"} {...others} />);
}

export default Component;
