import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/f/f6gvhacvn.css';
import '../../css/c/cdb0kh8jm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="f6gvhacvn"/><path class="cdb0kh8jm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:album-not-found-01"} {...others} />);
}

export default Component;
