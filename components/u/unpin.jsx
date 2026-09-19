import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctkt3ff5p.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ctkt3ff5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:unpin"} {...others} />);
}

export default Component;
