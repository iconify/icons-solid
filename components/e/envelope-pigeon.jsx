import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohbffsb_w.css';
import '../../css/t/tj55anbgb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ohbffsb_w"/><path class="tj55anbgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:envelope-pigeon"} {...others} />);
}

export default Component;
