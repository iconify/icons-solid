import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6e-d3bum.css';
import '../../css/y/ykod1zf1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w6e-d3bum"/><path class="ykod1zf1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:hot-tub"} {...others} />);
}

export default Component;
