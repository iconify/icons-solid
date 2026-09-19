import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z5z1758ht.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="z5z1758ht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:original-size-fill-12"} {...others} />);
}

export default Component;
