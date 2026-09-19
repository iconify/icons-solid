import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_-qmpv3t.css';
import '../../css/w/w-fhuabts.css';
import '../../css/v/vnkf6_bjo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="w_-qmpv3t"/><path class="w-fhuabts"/><path class="vnkf6_bjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:collapse-all"} {...others} />);
}

export default Component;
