import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/b/bkisl-b5r.css';
import '../../css/t/tue6w6-lk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><circle class="bkisl-b5r"/><path class="tue6w6-lk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:winter-duotone"} {...others} />);
}

export default Component;
