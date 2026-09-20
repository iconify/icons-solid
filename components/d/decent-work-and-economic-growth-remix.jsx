import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d7l_z8b7h.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="d7l_z8b7h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:decent-work-and-economic-growth-remix"} {...others} />);
}

export default Component;
