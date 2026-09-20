import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/g8s3rabku.css';
import '../../css/c/c4zd_hbkr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="g8s3rabku"/><path class="c4zd_hbkr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:droplet-filled-2"} {...others} />);
}

export default Component;
