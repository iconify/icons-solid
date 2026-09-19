import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cxvtyc1ly.css';

const viewBox = {"width":609,"height":768};
const content = `<path class="cxvtyc1ly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:youtube"} {...others} />);
}

export default Component;
