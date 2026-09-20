import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dnyar0h9e.css';
import '../../css/t/tq8-bl3wu.css';
import '../../css/u/unf_fvbfj.css';
import '../../css/m/majg_hb2i.css';
import '../../css/v/v1yvifbxy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="dnyar0h9e"/><path class="tq8-bl3wu"/><path class="unf_fvbfj"/><path clip-rule="evenodd" class="majg_hb2i"/><path class="v1yvifbxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:inbox-post-flat"} {...others} />);
}

export default Component;
