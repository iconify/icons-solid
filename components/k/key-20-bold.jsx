import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgdsozb-t.css';
import '../../css/s/scwdfi6dx.css';
import '../../css/p/pb060eflr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bgdsozb-t"/><path class="scwdfi6dx"/><path class="pb060eflr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:key-20-bold"} {...others} />);
}

export default Component;
