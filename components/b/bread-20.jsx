import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i4pa64bjg.css';
import '../../css/b/banax9p2s.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="i4pa64bjg"/><path class="banax9p2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:bread-20"} {...others} />);
}

export default Component;
