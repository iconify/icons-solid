import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sj3q2nb3r.css';
import '../../css/d/db9ccbbao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sj3q2nb3r"/><path class="db9ccbbao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mail-fill"} {...others} />);
}

export default Component;
