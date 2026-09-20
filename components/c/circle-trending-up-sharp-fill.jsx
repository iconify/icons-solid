import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_3l2v-ws.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j_3l2v-ws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-trending-up-sharp-fill"} {...others} />);
}

export default Component;
