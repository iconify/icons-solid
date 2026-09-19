import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z6vyf9bfs.css';

const viewBox = {"width":464,"height":464};
const content = `<path class="z6vyf9bfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:app-store"} {...others} />);
}

export default Component;
