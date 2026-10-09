import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3tz4sp-n.css';
import '../../css/a/ad2r2ebzw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="j3tz4sp-n"/><path class="ad2r2ebzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:files-20-bold"} {...others} />);
}

export default Component;
