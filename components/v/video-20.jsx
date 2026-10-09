import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9d68gmeo.css';
import '../../css/z/zuvofvbzl.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="u9d68gmeo"/><path class="zuvofvbzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:video-20"} {...others} />);
}

export default Component;
