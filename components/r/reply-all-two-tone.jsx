import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pzck7wbzu.css';
import '../../css/z/zu2u1mcjz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pzck7wbzu"/><path class="zu2u1mcjz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:reply-all-two-tone"} {...others} />);
}

export default Component;
