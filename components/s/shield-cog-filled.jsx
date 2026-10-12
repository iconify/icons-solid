import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jt1f5_b9q.css';
import '../../css/n/nvh489vpr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jt1f5_b9q"/><path clip-rule="evenodd" class="nvh489vpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:shield-cog-filled"} {...others} />);
}

export default Component;
