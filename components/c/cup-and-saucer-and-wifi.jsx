import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxxj6fbug.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="dxxj6fbug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:cup-and-saucer-and-wifi"} {...others} />);
}

export default Component;
