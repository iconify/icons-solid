import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxv-nlb9z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wxv-nlb9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:line-spacing"} {...others} />);
}

export default Component;
