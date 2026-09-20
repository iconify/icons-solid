import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vm4hm_17s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vm4hm_17s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:list-indent-decrease"} {...others} />);
}

export default Component;
