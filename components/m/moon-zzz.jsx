import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db7jd3bph.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="db7jd3bph"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:moon-zzz"} {...others} />);
}

export default Component;
