import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1weu1kyu.css';
import '../../css/c/cjj4u9psh.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="h1weu1kyu"/><path class="cjj4u9psh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sailboat-20"} {...others} />);
}

export default Component;
