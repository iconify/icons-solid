import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/l/l7m3398jy.css';
import '../../css/s/s96yev8ao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><rect class="l7m3398jy"/><path class="s96yev8ao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:credit-card"} {...others} />);
}

export default Component;
