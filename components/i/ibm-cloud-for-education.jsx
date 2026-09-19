import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y-r4rkboe.css';
import '../../css/x/xyuv38bch.css';
import '../../css/v/vi1bm7b1k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="y-r4rkboe"/><path class="xyuv38bch"/><path class="vi1bm7b1k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:ibm-cloud-for-education"} {...others} />);
}

export default Component;
