import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x4kqmebjo.css';
import '../../css/a/a-3y2gbgq.css';
import '../../css/k/k12_kcadb.css';
import '../../css/y/y-alb0bnx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-k x4kqmebjo"/><path class="a-3y2gbgq wm-k"/><path class="k12_kcadb wm-shadow"/><path class="wm-shine y-alb0bnx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-valentine:panel-top"} {...others} />);
}

export default Component;
