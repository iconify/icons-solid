import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f51nmvb9n.css';
import '../../css/t/t2aiwobxz.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="f51nmvb9n"/><path class="t2aiwobxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:folder-shared"} {...others} />);
}

export default Component;
