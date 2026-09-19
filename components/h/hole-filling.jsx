import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt8jb-7jt.css';
import '../../css/v/v3_7cbqjt.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="yt8jb-7jt"/><path class="v3_7cbqjt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:hole-filling"} {...others} />);
}

export default Component;
