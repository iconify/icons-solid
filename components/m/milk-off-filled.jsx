import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-wy2pb_f.css';
import '../../css/b/bh7vv0tuw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b-wy2pb_f"/><path class="bh7vv0tuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:milk-off-filled"} {...others} />);
}

export default Component;
