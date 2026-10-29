import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-vd9z53y.css';
import '../../css/b/bwdisqe6r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-vd9z53y wm-a"/><path class="bwdisqe6r wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:basketball"} {...others} />);
}

export default Component;
