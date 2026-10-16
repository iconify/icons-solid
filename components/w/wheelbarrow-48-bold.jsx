import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxe9q8-qa.css';
import '../../css/u/u6ksllbyh.css';
import '../../css/w/wfeudqbyr.css';
import '../../css/j/j2lk5jb4o.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bxe9q8-qa"/><path class="u6ksllbyh"/><path class="wfeudqbyr"/><path class="j2lk5jb4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:wheelbarrow-48-bold"} {...others} />);
}

export default Component;
