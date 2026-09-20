import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea3wjl-2i.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ea3wjl-2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:horizontal-slider-2-solid"} {...others} />);
}

export default Component;
