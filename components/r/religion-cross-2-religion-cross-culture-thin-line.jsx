import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mwqo_9cnu.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="mwqo_9cnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:religion-cross-2-religion-cross-culture-thin-line"} {...others} />);
}

export default Component;
