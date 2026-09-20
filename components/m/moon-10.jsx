import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ih0mf8ell.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="ih0mf8ell"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:moon-10"} {...others} />);
}

export default Component;
