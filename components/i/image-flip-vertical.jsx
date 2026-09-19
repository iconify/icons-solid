import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gf7od_ncm.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gf7od_ncm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dashicons:image-flip-vertical"} {...others} />);
}

export default Component;
