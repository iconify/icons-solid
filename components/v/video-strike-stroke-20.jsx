import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln-9uj60l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ln-9uj60l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:video-strike-stroke-20"} {...others} />);
}

export default Component;
