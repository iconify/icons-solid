import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c5nbrpbhj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c5nbrpbhj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:voice-scan-1"} {...others} />);
}

export default Component;
