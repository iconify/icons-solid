import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/y/yvsj4rbkk.css';
import '../../css/e/evxwsobhc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><circle class="yvsj4rbkk"/><path class="evxwsobhc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:check-ring-duotone-line"} {...others} />);
}

export default Component;
