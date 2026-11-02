import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zc_4xoalh.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="zc_4xoalh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"sidekickicons:corners-pointing-in-16-solid"} {...others} />);
}

export default Component;
