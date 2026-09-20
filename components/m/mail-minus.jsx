import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r9-8m60qe.css';
import '../../css/l/l2e3sbqne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r9-8m60qe"/><path class="l2e3sbqne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:mail-minus"} {...others} />);
}

export default Component;
