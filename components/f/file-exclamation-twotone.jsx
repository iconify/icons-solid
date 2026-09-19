import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk-nafbcd.css';
import '../../css/j/jso3jy2en.css';
import '../../css/k/kpy2_do4f.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="dk-nafbcd"/><path class="jso3jy2en"/><path class="kpy2_do4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:file-exclamation-twotone"} {...others} />);
}

export default Component;
