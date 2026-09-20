import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j7xt4ebhe.css';
import '../../css/q/q8d80dxoq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j7xt4ebhe"/><path class="q8d80dxoq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:fold-down-24"} {...others} />);
}

export default Component;
