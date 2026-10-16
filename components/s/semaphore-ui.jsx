import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k5wxjvy9k.css';
import '../../css/m/mo8aawb0e.css';
import '../../css/l/luei4dbch.css';
import '../../css/d/d8u9wobbs.css';

const viewBox = {"width":87.5,"height":100};
const content = `<path class="k5wxjvy9k"/><path class="mo8aawb0e"/><path class="luei4dbch"/><path class="d8u9wobbs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:semaphore-ui"} {...others} />);
}

export default Component;
