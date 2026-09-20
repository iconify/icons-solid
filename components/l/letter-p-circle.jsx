import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2j1l3yzl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w2j1l3yzl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixelarticons:letter-p-circle"} {...others} />);
}

export default Component;
