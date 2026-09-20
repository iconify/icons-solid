import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oud9o5bru.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oud9o5bru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:hard-drive-3-line"} {...others} />);
}

export default Component;
