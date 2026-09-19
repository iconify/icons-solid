import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c274zs7rb.css';
import '../../css/m/mwlmtkbnp.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="c274zs7rb"/><path class="mwlmtkbnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:football"} {...others} />);
}

export default Component;
