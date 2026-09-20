import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gstd5dbik.css';
import '../../css/j/j4hy2kb8r.css';
import '../../css/z/zn0v0yjgo.css';
import '../../css/a/axli2ab7b.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gstd5dbik"/><path class="j4hy2kb8r"/><path class="zn0v0yjgo"/><path class="axli2ab7b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:musical-note"} {...others} />);
}

export default Component;
