import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-0g1u_cj.css';
import '../../css/c/cvick3n-n.css';
import '../../css/m/ms9oq5b1y.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="y-0g1u_cj"/><path class="cvick3n-n"/><path class="ms9oq5b1y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:person-private-duo"} {...others} />);
}

export default Component;
