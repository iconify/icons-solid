import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zfcgk_l-w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zfcgk_l-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:nut-and-bolt"} {...others} />);
}

export default Component;
