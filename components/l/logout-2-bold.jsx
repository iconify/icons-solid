import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvymvrbay.css';
import '../../css/y/yu315fbxr.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dvymvrbay"/><path class="yu315fbxr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:logout-2-bold"} {...others} />);
}

export default Component;
