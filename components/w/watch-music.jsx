import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vqydno98w.css';
import '../../css/e/er0tjywys.css';
import '../../css/q/qydugn1hh.css';
import '../../css/h/h_5fnjb7c.css';
import '../../css/c/cqfuqgbnf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vqydno98w"/><rect class="er0tjywys"/><path class="qydugn1hh"/><circle class="h_5fnjb7c"/><path class="cqfuqgbnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:watch-music"} {...others} />);
}

export default Component;
