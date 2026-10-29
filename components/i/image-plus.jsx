import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4oqcxbpe.css';
import '../../css/e/egyqx8bap.css';
import '../../css/i/iwfcdhl5u.css';
import '../../css/q/qicp8db8o.css';
import '../../css/v/vqrvagbdq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c4oqcxbpe wm-k"/><path class="egyqx8bap wm-a"/><path class="iwfcdhl5u wm-k"/><path class="qicp8db8o wm-s"/><path class="vqrvagbdq wm-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:image-plus"} {...others} />);
}

export default Component;
