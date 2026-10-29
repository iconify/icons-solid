import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4ioyfbzk.css';
import '../../css/h/hie35vbnj.css';
import '../../css/k/k1t7ff4oh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b4ioyfbzk wm-k"/><path class="hie35vbnj wm-k"/><path class="k1t7ff4oh wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:dog"} {...others} />);
}

export default Component;
