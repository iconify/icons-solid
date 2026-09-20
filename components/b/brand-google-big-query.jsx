import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/skbfhnfwi.css';
import '../../css/v/vq-1tvi9a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="skbfhnfwi"/><path class="vq-1tvi9a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-google-big-query"} {...others} />);
}

export default Component;
