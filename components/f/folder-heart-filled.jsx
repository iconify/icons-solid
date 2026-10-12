import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uob4j6bcx.css';
import '../../css/j/jog-_gb5g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uob4j6bcx"/><path class="jog-_gb5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:folder-heart-filled"} {...others} />);
}

export default Component;
