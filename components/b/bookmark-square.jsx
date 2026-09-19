import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tv26jd01x.css';

const viewBox = {"width":20,"height":20};
const content = `<path clip-rule="evenodd" class="tv26jd01x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons-solid:bookmark-square"} {...others} />);
}

export default Component;
