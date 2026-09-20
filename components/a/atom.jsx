import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z05t5g99i.css';
import '../../css/u/u9rfsfb5b.css';
import '../../css/h/hm5c2097h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="z05t5g99i"/><path class="u9rfsfb5b"/><path class="hm5c2097h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:atom"} {...others} />);
}

export default Component;
