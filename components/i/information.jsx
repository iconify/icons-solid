import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bkn1_fb_t.css';
import '../../css/g/gzawnq-ak.css';

const viewBox = {"width":40,"height":40};
const content = `<path class="bkn1_fb_t"/><path class="gzawnq-ak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iwwa:information"} {...others} />);
}

export default Component;
