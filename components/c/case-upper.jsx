import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xff7nngrv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xff7nngrv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:case-upper"} {...others} />);
}

export default Component;
