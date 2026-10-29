import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/x/xr4m5hjea.css';
import '../../css/b/b7gjsf92m.css';
import '../../css/h/hsmjbytjh.css';
import '../../css/z/zz6g7nb8u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="wm-k xr4m5hjea"/><path class="b7gjsf92m wm-s"/><path class="hsmjbytjh"/><path class="wm-s zz6g7nb8u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:file-clock"} {...others} />);
}

export default Component;
