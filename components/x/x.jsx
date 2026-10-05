import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfdrzfb9i.css';
import '../../css/y/y4ngpjbgm.css';
import '../../css/k/kj5laqp_h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="bfdrzfb9i"><path class="y4ngpjbgm"/><path class="kj5laqp_h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:x"} {...others} />);
}

export default Component;
