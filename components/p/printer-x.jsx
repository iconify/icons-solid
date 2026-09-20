import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/przzuwbpc.css';
import '../../css/n/n_1kk4vwo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="przzuwbpc"/><path class="n_1kk4vwo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:printer-x"} {...others} />);
}

export default Component;
