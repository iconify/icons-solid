import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z7nqglb-x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z7nqglb-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:terminal-tmux"} {...others} />);
}

export default Component;
