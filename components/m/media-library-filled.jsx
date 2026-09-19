import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w6feaxw3l.css';
import '../../css/g/gx0j_wt-s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w6feaxw3l"/><path class="gx0j_wt-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:media-library-filled"} {...others} />);
}

export default Component;
