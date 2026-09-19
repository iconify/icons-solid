import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ayfgg5nwl.css';
import '../../css/c/ccaa01b9p.css';
import '../../css/j/jej9crbqd.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="ayfgg5nwl"/><path class="ccaa01b9p"/><path class="jej9crbqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:warning-twotone"} {...others} />);
}

export default Component;
