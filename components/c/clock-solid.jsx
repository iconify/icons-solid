import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tqg48nbgt.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="tqg48nbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:clock-solid"} {...others} />);
}

export default Component;
