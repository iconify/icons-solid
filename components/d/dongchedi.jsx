import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1v12nz2i.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="j1v12nz2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:dongchedi"} {...others} />);
}

export default Component;
