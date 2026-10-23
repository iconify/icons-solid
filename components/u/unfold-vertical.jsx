import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wt7jvlb2a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wt7jvlb2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:unfold-vertical"} {...others} />);
}

export default Component;
