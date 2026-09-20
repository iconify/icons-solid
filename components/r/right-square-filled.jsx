import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yiuj1-afm.css';
import '../../css/w/wd15b2bym.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yiuj1-afm"/><path clip-rule="evenodd" class="wd15b2bym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:right-square-filled"} {...others} />);
}

export default Component;
