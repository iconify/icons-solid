import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xl5w8z7ax.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xl5w8z7ax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:equalizer"} {...others} />);
}

export default Component;
