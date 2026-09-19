import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfsiw919t.css';
import '../../css/k/kqtvm-g_y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yfsiw919t"/><path class="kqtvm-g_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:shape-exclude-alt"} {...others} />);
}

export default Component;
