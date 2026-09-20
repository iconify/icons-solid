import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pq_4ykvlp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="pq_4ykvlp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:ferris-wheel-outline"} {...others} />);
}

export default Component;
