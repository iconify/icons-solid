import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wh367bb0w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wh367bb0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:key-round-sharp-fill"} {...others} />);
}

export default Component;
