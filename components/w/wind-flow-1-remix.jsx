import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eelxote3h.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="eelxote3h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:wind-flow-1-remix"} {...others} />);
}

export default Component;
