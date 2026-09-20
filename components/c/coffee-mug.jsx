import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/feku8wixg.css';
import '../../css/b/b8jih2bfw.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="feku8wixg"/><path class="b8jih2bfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:coffee-mug"} {...others} />);
}

export default Component;
