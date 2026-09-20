import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4nsh49nb.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="s4nsh49nb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:perfume-bottle-with-spray"} {...others} />);
}

export default Component;
