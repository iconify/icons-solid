import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljp-s5bfn.css';

const viewBox = {"width":960,"height":1024};
const content = `<path class="ljp-s5bfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:drmanhattan"} {...others} />);
}

export default Component;
