import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yoibcycal.css';
import '../../css/r/rewt-b9oy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yoibcycal"/><path class="rewt-b9oy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nimbus:pix"} {...others} />);
}

export default Component;
