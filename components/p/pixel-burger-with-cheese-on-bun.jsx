import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jsx5tmbnw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jsx5tmbnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pixel-burger-with-cheese-on-bun"} {...others} />);
}

export default Component;
