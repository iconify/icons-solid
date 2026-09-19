import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yv_ln2l9d.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="yv_ln2l9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:fast-forward"} {...others} />);
}

export default Component;
