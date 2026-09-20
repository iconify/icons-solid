import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqftncbbn.css';
import '../../css/e/ezsvdgq8b.css';
import '../../css/j/jww928bvl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vqftncbbn"/><path class="ezsvdgq8b"/><path class="jww928bvl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:design-drawing-board"} {...others} />);
}

export default Component;
