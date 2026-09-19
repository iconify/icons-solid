import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d6v0htbfx.css';
import '../../css/j/jso3jy2en.css';
import '../../css/e/eca5gmkyn.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="d6v0htbfx"/><path class="jso3jy2en"/><path class="eca5gmkyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:file-markdown-twotone"} {...others} />);
}

export default Component;
