import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x7s1kbulg.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="x7s1kbulg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:strawberry-remix"} {...others} />);
}

export default Component;
