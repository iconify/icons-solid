import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k08r_06rn.css';
import '../../css/r/ro61si5hh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k08r_06rn"/><path class="ro61si5hh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:settings"} {...others} />);
}

export default Component;
