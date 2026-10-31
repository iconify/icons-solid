import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/byq9j8u9d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="byq9j8u9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chevron-left-to-line-fill-round"} {...others} />);
}

export default Component;
