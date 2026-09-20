import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h6e6_zbmu.css';
import '../../css/s/s_ffcgb8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h6e6_zbmu"/><rect class="s_ffcgb8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:arrow-down-10"} {...others} />);
}

export default Component;
