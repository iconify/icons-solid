import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gc8-4tb2b.css';
import '../../css/k/kd7zaoyhh.css';
import '../../css/d/dc42evbqq.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="gc8-4tb2b"/><path class="kd7zaoyhh"/><path class="dc42evbqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:check-square-twotone"} {...others} />);
}

export default Component;
