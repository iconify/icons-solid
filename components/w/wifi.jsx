import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cfcbzqdzf.css';
import '../../css/l/lqc9yhstq.css';
import '../../css/b/b8lwe5bdr.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="cfcbzqdzf"/><path clip-rule="evenodd" class="lqc9yhstq"/><path class="b8lwe5bdr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:wifi"} {...others} />);
}

export default Component;
