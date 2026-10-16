import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/luddyjg5s.css';
import '../../css/z/z2o7skw1w.css';
import '../../css/y/yhu9-56ni.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="luddyjg5s"/><path class="z2o7skw1w"/><path class="yhu9-56ni"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:phone-incoming-20-bold"} {...others} />);
}

export default Component;
