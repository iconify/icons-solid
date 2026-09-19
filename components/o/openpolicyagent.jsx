import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi0-grw5x.css';

const viewBox = {"width":460,"height":512};
const content = `<path class="hi0-grw5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:openpolicyagent"} {...others} />);
}

export default Component;
