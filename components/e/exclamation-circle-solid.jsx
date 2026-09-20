import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jw6plybjx.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="jw6plybjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:exclamation-circle-solid"} {...others} />);
}

export default Component;
