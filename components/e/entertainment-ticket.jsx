import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w0m4hyiak.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w0m4hyiak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:entertainment-ticket"} {...others} />);
}

export default Component;
