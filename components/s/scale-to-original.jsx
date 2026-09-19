import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj_99kb7v.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="wj_99kb7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:scale-to-original"} {...others} />);
}

export default Component;
