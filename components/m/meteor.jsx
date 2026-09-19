import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eu1nxz26a.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="eu1nxz26a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:meteor"} {...others} />);
}

export default Component;
