import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e7xqisbom.css';

const viewBox = {"width":24,"height":24,"left":-7,"top":-7};
const content = `<path class="e7xqisbom"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:chevron-down-left"} {...others} />);
}

export default Component;
