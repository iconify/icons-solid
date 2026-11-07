import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvhx8gb9i.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/qigovot_c.css';
import '../../css/v/v-s_f4e2d.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qvhx8gb9i"/><g class="xtpeb-edw"><path class="qigovot_c"/><path class="v-s_f4e2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:list-bold-duotone"} {...others} />);
}

export default Component;
