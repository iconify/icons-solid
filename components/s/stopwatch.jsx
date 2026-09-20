import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ob6wv6w5p.css';
import '../../css/o/olze3bcsd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ob6wv6w5p"/><path clip-rule="evenodd" class="olze3bcsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:stopwatch"} {...others} />);
}

export default Component;
