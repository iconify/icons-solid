import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxcfexb1s.css';

const viewBox = {"width":283.46,"height":283.46};
const content = `<path class="zxcfexb1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:photoprism-dark"} {...others} />);
}

export default Component;
