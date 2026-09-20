import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s07kv3b7t.css';
import '../../css/a/afv_f682n.css';
import '../../css/f/f4tfatmwd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="s07kv3b7t"/><path class="afv_f682n"/><circle class="f4tfatmwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:camera-duotone-line"} {...others} />);
}

export default Component;
