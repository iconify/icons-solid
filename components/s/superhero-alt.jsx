import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vt8u4qbwd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vt8u4qbwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:superhero-alt"} {...others} />);
}

export default Component;
