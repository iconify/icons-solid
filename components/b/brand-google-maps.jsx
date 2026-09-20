import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gf9p_8b1r.css';
import '../../css/b/b918t7u_k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gf9p_8b1r"/><path class="b918t7u_k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-google-maps"} {...others} />);
}

export default Component;
