import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/fb2b0ybzm.css';
import '../../css/h/hh_0hfbvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="fb2b0ybzm"/><path class="hh_0hfbvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:air-conditioning-disabled"} {...others} />);
}

export default Component;
