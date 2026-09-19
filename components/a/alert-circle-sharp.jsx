import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqy2g75wd.css';
import '../../css/b/bm9qtjbmr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bqy2g75wd"/><path class="bm9qtjbmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:alert-circle-sharp"} {...others} />);
}

export default Component;
