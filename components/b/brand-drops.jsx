import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yf5fbwbbr.css';
import '../../css/f/f-_jwwbfy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yf5fbwbbr"/><path class="f-_jwwbfy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-drops"} {...others} />);
}

export default Component;
