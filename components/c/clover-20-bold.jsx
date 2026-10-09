import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdw4w6evj.css';
import '../../css/x/xn1pz4iuf.css';
import '../../css/w/w9gsb7blj.css';
import '../../css/h/h1e1mnb1c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jdw4w6evj"/><path class="xn1pz4iuf"/><path class="w9gsb7blj"/><path class="h1e1mnb1c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:clover-20-bold"} {...others} />);
}

export default Component;
