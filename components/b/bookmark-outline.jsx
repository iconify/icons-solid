import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kxlp5qvgf.css';
import '../../css/o/ojf0j38zt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kxlp5qvgf"/><path clip-rule="evenodd" class="ojf0j38zt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bookmark-outline"} {...others} />);
}

export default Component;
