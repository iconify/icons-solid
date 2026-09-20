import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xe80l4_cb.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="xe80l4_cb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:module-puzzle-1-solid"} {...others} />);
}

export default Component;
