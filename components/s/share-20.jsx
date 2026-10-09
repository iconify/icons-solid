import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jlqc2v4ju.css';
import '../../css/e/e9f0v0bru.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jlqc2v4ju"/><path class="e9f0v0bru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:share-20"} {...others} />);
}

export default Component;
