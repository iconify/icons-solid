import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j5sm3i20k.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="j5sm3i20k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:menu-right-fill"} {...others} />);
}

export default Component;
