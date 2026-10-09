import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj594fbcf.css';
import '../../css/a/avqgz5tna.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jj594fbcf"/><path class="avqgz5tna"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wardrobe-20"} {...others} />);
}

export default Component;
