import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jp2jyjjny.css';
import '../../css/t/t4ppgnbbm.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="jp2jyjjny"/><path class="t4ppgnbbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:temperature"} {...others} />);
}

export default Component;
