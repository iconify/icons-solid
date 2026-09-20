import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj8aj-vuw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jj8aj-vuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:ribbon-solid"} {...others} />);
}

export default Component;
