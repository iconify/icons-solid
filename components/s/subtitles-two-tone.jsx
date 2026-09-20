import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/atvej9eay.css';
import '../../css/w/wmdz_xjsf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="atvej9eay"/><path class="wmdz_xjsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:subtitles-two-tone"} {...others} />);
}

export default Component;
