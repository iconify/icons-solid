import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zqad6ybxx.css';
import '../../css/l/lnu_gcc9t.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zqad6ybxx"/><path class="lnu_gcc9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:home"} {...others} />);
}

export default Component;
