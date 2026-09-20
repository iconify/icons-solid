import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xt5ak_ifm.css';
import '../../css/e/e9_6ycqau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xt5ak_ifm"/><path class="e9_6ycqau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:land-plot"} {...others} />);
}

export default Component;
