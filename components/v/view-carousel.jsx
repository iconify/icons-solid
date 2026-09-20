import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ugwr-jxmd.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ugwr-jxmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:view-carousel"} {...others} />);
}

export default Component;
