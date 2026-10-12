import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/czrzf_bfu.css';
import '../../css/d/ddayzub2a.css';
import '../../css/w/w7b6x1bym.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="czrzf_bfu"/><rect class="ddayzub2a"/><path class="w7b6x1bym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:video-off"} {...others} />);
}

export default Component;
