import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db6rklxru.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="db6rklxru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:park"} {...others} />);
}

export default Component;
