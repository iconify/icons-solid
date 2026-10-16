import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xh-es2avx.css';
import '../../css/x/x8lr6rehc.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xh-es2avx"/><path class="x8lr6rehc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:image-off-20-bold"} {...others} />);
}

export default Component;
