import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rcri1bbkf.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="rcri1bbkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:religious-buddhist-15"} {...others} />);
}

export default Component;
