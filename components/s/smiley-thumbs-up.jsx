import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kx2nxk0bk.css';
import '../../css/n/ndzomeb7u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kx2nxk0bk"/><path class="ndzomeb7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smiley-thumbs-up"} {...others} />);
}

export default Component;
