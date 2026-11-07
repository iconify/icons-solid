import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edf2mabxb.css';
import '../../css/b/bkvj9ck2i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="edf2mabxb"/><path class="bkvj9ck2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:square-arrow-right-bold-duotone"} {...others} />);
}

export default Component;
