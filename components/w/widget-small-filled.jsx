import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1t66kn2w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p1t66kn2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:widget-small-filled"} {...others} />);
}

export default Component;
