import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f69hrxcob.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f69hrxcob"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:jenkins"} {...others} />);
}

export default Component;
