import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/trcjn3b8t.css';

const viewBox = {"width":1024,"height":704};
const content = `<path class="trcjn3b8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:handright"} {...others} />);
}

export default Component;
