import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z-ozy5b1f.css';
import '../../css/f/f8u_g-bqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z-ozy5b1f"/><path class="f8u_g-bqy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:clock-arrow-up"} {...others} />);
}

export default Component;
