import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n3-qilbce.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="n3-qilbce"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-index-quaver-tiny"} {...others} />);
}

export default Component;
