import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_a-jbcwn.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="l_a-jbcwn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:linkedin"} {...others} />);
}

export default Component;
