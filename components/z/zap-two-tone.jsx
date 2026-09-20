import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/ds4ca-zun.css';
import '../../css/s/sp0reab0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="ds4ca-zun"/><path class="sp0reab0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:zap-two-tone"} {...others} />);
}

export default Component;
