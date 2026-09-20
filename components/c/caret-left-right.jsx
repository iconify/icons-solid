import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y37et8bgy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y37et8bgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:caret-left-right"} {...others} />);
}

export default Component;
