import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jb730ab3d.css';
import '../../css/z/zhe5xmgrw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="jb730ab3d"/><path class="zhe5xmgrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:heading-level-6"} {...others} />);
}

export default Component;
