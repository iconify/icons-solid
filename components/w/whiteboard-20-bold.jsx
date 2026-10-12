import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/apx8esb2g.css';
import '../../css/q/qz-yjjbdo.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="apx8esb2g"/><path class="qz-yjjbdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:whiteboard-20-bold"} {...others} />);
}

export default Component;
