import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a7779yojj.css';
import '../../css/w/wum7oib2b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="a7779yojj"/><path class="wum7oib2b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:cake-line"} {...others} />);
}

export default Component;
