import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e6g11fwan.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-2};
const content = `<path class="e6g11fwan"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:bookmark-f"} {...others} />);
}

export default Component;
