import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9j99ekyh.css';
import '../../css/j/jso3jy2en.css';
import '../../css/k/kbsh_4bin.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="s9j99ekyh"/><path class="jso3jy2en"/><path class="kbsh_4bin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:file-image-twotone"} {...others} />);
}

export default Component;
