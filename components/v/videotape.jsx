import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rjtzudkag.css';
import '../../css/s/s1t0p4bny.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rjtzudkag"/><path class="s1t0p4bny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:videotape"} {...others} />);
}

export default Component;
