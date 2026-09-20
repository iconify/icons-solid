import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wc_cf_sdm.css';
import '../../css/g/g-8e__26p.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="wc_cf_sdm"/><path clip-rule="evenodd" class="g-8e__26p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:galaxy-1-flat"} {...others} />);
}

export default Component;
