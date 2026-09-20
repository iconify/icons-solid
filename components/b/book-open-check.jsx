import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qe5frxbku.css';
import '../../css/s/sqpkv2udw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qe5frxbku"/><path class="sqpkv2udw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:book-open-check"} {...others} />);
}

export default Component;
