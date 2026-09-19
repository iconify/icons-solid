import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezeu5xbia.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ezeu5xbia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:visual-studio"} {...others} />);
}

export default Component;
