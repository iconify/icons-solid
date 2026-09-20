import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/f/f0o_u22zd.css';
import '../../css/o/oxjent7ci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="f0o_u22zd"/><path class="oxjent7ci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hammer-fill"} {...others} />);
}

export default Component;
