import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/t7v7wjbja.css';
import '../../css/w/wh_xltbaf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="t7v7wjbja"/><path class="wh_xltbaf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:currency-ripple"} {...others} />);
}

export default Component;
