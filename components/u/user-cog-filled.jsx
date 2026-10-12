import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9p861bjm.css';
import '../../css/b/b2y5zk0fk.css';
import '../../css/j/jqs9sql0v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r9p861bjm"/><path clip-rule="evenodd" class="b2y5zk0fk"/><path class="jqs9sql0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:user-cog-filled"} {...others} />);
}

export default Component;
