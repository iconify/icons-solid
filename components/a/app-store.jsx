import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g7j9fnbeb.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g7j9fnbeb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:app-store"} {...others} />);
}

export default Component;
