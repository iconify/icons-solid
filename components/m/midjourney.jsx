import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8p4k7b8x.css';
import '../../css/o/o2gadtdnr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t8p4k7b8x"/><path class="o2gadtdnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:midjourney"} {...others} />);
}

export default Component;
