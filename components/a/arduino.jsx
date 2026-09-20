import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i623bfbsp.css';
import '../../css/v/veyji9_1k.css';
import '../../css/d/dm587nnti.css';
import '../../css/y/ymmq4nbfb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="i623bfbsp"/><path class="veyji9_1k"/><path class="dm587nnti"/><path class="ymmq4nbfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:arduino"} {...others} />);
}

export default Component;
