import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c04ix1e3z.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="c04ix1e3z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:moon-16"} {...others} />);
}

export default Component;
