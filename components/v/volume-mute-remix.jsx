import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cz2h6vkvf.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="cz2h6vkvf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:volume-mute-remix"} {...others} />);
}

export default Component;
