import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/azc-dwb1v.css';
import '../../css/d/dnz5a6e3v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="azc-dwb1v"/><path class="dnz5a6e3v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:device-tablet-cog"} {...others} />);
}

export default Component;
