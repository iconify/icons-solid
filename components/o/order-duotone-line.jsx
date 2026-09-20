import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxbaodhg.css';
import '../../css/n/n4vfkm94k.css';
import '../../css/c/cpglq24vf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="vbxbaodhg"><rect class="n4vfkm94k"/><path class="cpglq24vf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:order-duotone-line"} {...others} />);
}

export default Component;
