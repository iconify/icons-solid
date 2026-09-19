import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l8fv5cbya.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l8fv5cbya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:play-bar-v-alt"} {...others} />);
}

export default Component;
