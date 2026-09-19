import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewxyoiu2q.css';
import '../../css/z/zc4hgcctu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ewxyoiu2q"/><path class="zc4hgcctu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:oldkey"} {...others} />);
}

export default Component;
