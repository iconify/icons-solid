import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cv23k6bep.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="cv23k6bep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:closewindow"} {...others} />);
}

export default Component;
