import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lr9yi2ure.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="lr9yi2ure"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:nextjs-solid"} {...others} />);
}

export default Component;
