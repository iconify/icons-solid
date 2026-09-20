import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fq50w1k7n.css';
import '../../css/k/ki6y78brp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fq50w1k7n"/><path class="ki6y78brp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:modern-tv-4-k-bold"} {...others} />);
}

export default Component;
