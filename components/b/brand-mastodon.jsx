import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f7n26h7yd.css';
import '../../css/v/vq1ro5v7a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f7n26h7yd"/><path class="vq1ro5v7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-mastodon"} {...others} />);
}

export default Component;
