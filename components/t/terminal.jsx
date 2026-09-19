import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z0k1xbo6a.css';

const viewBox = {"width":680,"height":614};
const content = `<path class="z0k1xbo6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:terminal"} {...others} />);
}

export default Component;
