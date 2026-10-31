import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yyd5wfbxz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yyd5wfbxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lock-keyhole-gloss"} {...others} />);
}

export default Component;
