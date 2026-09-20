import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r_ohhh97i.css';
import '../../css/w/w65t7vpsn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r_ohhh97i"/><circle class="w65t7vpsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:monitor-cog"} {...others} />);
}

export default Component;
