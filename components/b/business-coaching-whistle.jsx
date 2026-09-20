import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lowqi3bit.css';
import '../../css/n/nm733ibre.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lowqi3bit"/><path class="nm733ibre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:business-coaching-whistle"} {...others} />);
}

export default Component;
