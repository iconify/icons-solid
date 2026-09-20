import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bfpvy8bur.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="bfpvy8bur"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:hourglass3"} {...others} />);
}

export default Component;
