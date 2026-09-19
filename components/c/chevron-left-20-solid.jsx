import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jb7zqp66w.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="jb7zqp66w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:chevron-left-20-solid"} {...others} />);
}

export default Component;
