import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o500wtkuz.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="o500wtkuz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:toiletbrush"} {...others} />);
}

export default Component;
