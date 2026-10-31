import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cgwxuac0h.css';
import '../../css/b/bbzbypbsp.css';
import '../../css/w/wpc3x9bjb.css';
import '../../css/z/zx_78cd7a.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="cgwxuac0h"/><path class="bbzbypbsp"/><path class="wpc3x9bjb"/><path class="zx_78cd7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:oregano"} {...others} />);
}

export default Component;
