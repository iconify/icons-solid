import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x3l8a-bdg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="x3l8a-bdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:ms-word-outline"} {...others} />);
}

export default Component;
