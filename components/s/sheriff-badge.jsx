import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2fgik1my.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="w2fgik1my"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:sheriff-badge"} {...others} />);
}

export default Component;
