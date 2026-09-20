import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbsxuj1jh.css';

const viewBox = {"width":15,"height":15};
const content = `<path clip-rule="evenodd" class="vbsxuj1jh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:border-all-solid"} {...others} />);
}

export default Component;
