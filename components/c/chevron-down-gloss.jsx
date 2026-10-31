import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yuyhm7bgc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yuyhm7bgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chevron-down-gloss"} {...others} />);
}

export default Component;
