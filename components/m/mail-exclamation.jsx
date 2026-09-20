import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rhlkpob7f.css';
import '../../css/f/frj_gabcl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="rhlkpob7f"/><path class="frj_gabcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mail-exclamation"} {...others} />);
}

export default Component;
