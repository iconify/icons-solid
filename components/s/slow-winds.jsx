import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/har_mcb9f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="har_mcb9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:slow-winds"} {...others} />);
}

export default Component;
