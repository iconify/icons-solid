import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk21cmshl.css';
import '../../css/t/tyqxa-33r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dk21cmshl"/><path class="tyqxa-33r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:developer-portal"} {...others} />);
}

export default Component;
