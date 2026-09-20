import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1nvo3hea.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="k1nvo3hea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:wind-beaufort-3"} {...others} />);
}

export default Component;
