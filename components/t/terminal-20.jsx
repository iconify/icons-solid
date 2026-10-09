import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jq_8t4b0z.css';
import '../../css/e/ef96-hbpp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="jq_8t4b0z"/><path class="ef96-hbpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:terminal-20"} {...others} />);
}

export default Component;
