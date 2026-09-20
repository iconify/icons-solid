import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/un0pq6cid.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="un0pq6cid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:rotate-rectangle"} {...others} />);
}

export default Component;
