import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jp9l5nb1u.css';
import '../../css/v/v-lew9-av.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jp9l5nb1u"/><path class="v-lew9-av"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:jotty"} {...others} />);
}

export default Component;
