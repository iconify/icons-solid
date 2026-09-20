import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfbhqh24h.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="gfbhqh24h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-falling-on-rough-surface"} {...others} />);
}

export default Component;
