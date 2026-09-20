import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cstzu4b_z.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="cstzu4b_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:jet-skiing"} {...others} />);
}

export default Component;
