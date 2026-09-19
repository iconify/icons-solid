import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kje457rsc.css';
import '../../css/c/ckdfspy3l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kje457rsc"/><path class="ckdfspy3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:view-timeline"} {...others} />);
}

export default Component;
