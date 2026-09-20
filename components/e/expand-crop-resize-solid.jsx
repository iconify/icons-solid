import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfzsmob_l.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="hfzsmob_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:expand-crop-resize-solid"} {...others} />);
}

export default Component;
