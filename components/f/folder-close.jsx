import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8f4i2m7d.css';

const viewBox = {"width":1200,"height":1200};
const content = `<path class="j8f4i2m7d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"el:folder-close"} {...others} />);
}

export default Component;
