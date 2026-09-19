import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s1x9vb-ma.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s1x9vb-ma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:screen-normal-thin"} {...others} />);
}

export default Component;
