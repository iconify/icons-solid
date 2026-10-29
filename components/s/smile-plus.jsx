import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mobgpnbyt.css';
import '../../css/j/j71etvb-q.css';
import '../../css/m/mk6rif5et.css';
import '../../css/f/fk7fz6bib.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="mobgpnbyt wm-k"/><path class="j71etvb-q"/><path class="mk6rif5et"/><path class="fk7fz6bib wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:smile-plus"} {...others} />);
}

export default Component;
