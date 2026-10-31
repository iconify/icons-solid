import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tkntuhbzi.css';
import '../../css/c/c5_wc7b7b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tkntuhbzi"/><path class="c5_wc7b7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flag-duocolor-round"} {...others} />);
}

export default Component;
