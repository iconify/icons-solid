import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/o/oxps9bbuf.css';
import '../../css/p/pzzg-sbsi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><rect class="oxps9bbuf"/><path class="pzzg-sbsi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:notebook-duotone-line"} {...others} />);
}

export default Component;
