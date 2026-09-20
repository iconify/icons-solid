import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rw5pnvb2b.css';
import '../../css/c/c2wy4abda.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rw5pnvb2b"/><path class="c2wy4abda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:instagram"} {...others} />);
}

export default Component;
