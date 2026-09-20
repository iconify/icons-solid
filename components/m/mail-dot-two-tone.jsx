import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b2t_f_n2n.css';
import '../../css/l/lb4yrab6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="b2t_f_n2n"/><path class="lb4yrab6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mail-dot-two-tone"} {...others} />);
}

export default Component;
