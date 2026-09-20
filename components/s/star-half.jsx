import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbpy3zb7d.css';
import '../../css/f/fepfndbxl.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="bbpy3zb7d"/><path class="fepfndbxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:star-half"} {...others} />);
}

export default Component;
