import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e-q_4i3gp.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="e-q_4i3gp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:city-hall-remix"} {...others} />);
}

export default Component;
