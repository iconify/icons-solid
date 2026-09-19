import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7fz2tp4w.css';

const viewBox = {"width":1025,"height":1024};
const content = `<path class="l7fz2tp4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:textwidth"} {...others} />);
}

export default Component;
