import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zrrn-2bpq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zrrn-2bpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:signal-low"} {...others} />);
}

export default Component;
