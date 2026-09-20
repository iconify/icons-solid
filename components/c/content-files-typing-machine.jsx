import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x4vnr9bsm.css';
import '../../css/s/sliyubglr.css';
import '../../css/j/j-d0sbcgi.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="x4vnr9bsm"/><path class="sliyubglr"/><path class="j-d0sbcgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:content-files-typing-machine"} {...others} />);
}

export default Component;
