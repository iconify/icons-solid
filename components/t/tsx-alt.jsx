import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8al6yiie.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o8al6yiie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:tsx-alt"} {...others} />);
}

export default Component;
