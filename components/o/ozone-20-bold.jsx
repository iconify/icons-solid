import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p92x1lbfk.css';
import '../../css/x/x5bwyrbir.css';
import '../../css/x/xundq6axq.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p92x1lbfk"/><path class="x5bwyrbir"/><path class="xundq6axq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:ozone-20-bold"} {...others} />);
}

export default Component;
