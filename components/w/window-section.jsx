import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bgf6p-wjx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bgf6p-wjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:window-section"} {...others} />);
}

export default Component;
