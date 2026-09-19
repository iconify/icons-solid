import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v-2lvl7wl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v-2lvl7wl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:kinopub"} {...others} />);
}

export default Component;
