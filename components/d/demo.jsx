import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izajwurpr.css';
import '../../css/g/g24buwbsu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="izajwurpr"/><path class="g24buwbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:demo"} {...others} />);
}

export default Component;
