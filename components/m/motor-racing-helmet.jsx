import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/r1ykcdcgr.css';
import '../../css/e/e_h50bcta.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="r1ykcdcgr"/><path class="e_h50bcta"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:motor-racing-helmet"} {...others} />);
}

export default Component;
