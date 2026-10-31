import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yxt7g3rhh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yxt7g3rhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:loading-round"} {...others} />);
}

export default Component;
