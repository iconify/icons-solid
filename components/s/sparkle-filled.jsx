import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jn1b_0v6f.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jn1b_0v6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:sparkle-filled"} {...others} />);
}

export default Component;
