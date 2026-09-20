import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f1_9nob6g.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="f1_9nob6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:whale-watching"} {...others} />);
}

export default Component;
