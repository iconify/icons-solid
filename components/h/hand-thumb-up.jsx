import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbl7lh2ya.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gbl7lh2ya"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:hand-thumb-up"} {...others} />);
}

export default Component;
