import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vyzaa1b7x.css';
import '../../css/l/labyc9bkw.css';
import '../../css/k/kmcx5kbxj.css';
import '../../css/g/g6e0-4tfd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vyzaa1b7x wm-a"/><path class="labyc9bkw wm-k"/><path class="kmcx5kbxj wm-k"/><path class="g6e0-4tfd wm-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:gallery-horizontal"} {...others} />);
}

export default Component;
