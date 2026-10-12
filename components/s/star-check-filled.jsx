import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2lhz8f1q.css';
import '../../css/v/vnjnmccnj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e2lhz8f1q"/><path class="vnjnmccnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:star-check-filled"} {...others} />);
}

export default Component;
