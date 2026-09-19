import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qv1ez0bwx.css';
import '../../css/w/wts2hr0yq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="qv1ez0bwx"/><path class="wts2hr0yq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:arrow-shuffle"} {...others} />);
}

export default Component;
