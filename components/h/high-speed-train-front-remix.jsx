import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4wo1gk8h.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="r4wo1gk8h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:high-speed-train-front-remix"} {...others} />);
}

export default Component;
