import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i9u81yn3y.css';
import '../../css/c/c_2y2ytjs.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="i9u81yn3y"/><path class="c_2y2ytjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:git-commit-outline"} {...others} />);
}

export default Component;
