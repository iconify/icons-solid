import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7gkr3nsl.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="d7gkr3nsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:square-clock-solid"} {...others} />);
}

export default Component;
