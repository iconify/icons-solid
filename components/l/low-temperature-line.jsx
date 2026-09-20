import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zlrh-ubaa.css';
import '../../css/u/u13yqv0ps.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zlrh-ubaa"/><path class="u13yqv0ps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:low-temperature-line"} {...others} />);
}

export default Component;
