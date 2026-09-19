import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zo46cwbkr.css';
import '../../css/y/y1bea5b9l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zo46cwbkr"/><path class="y1bea5b9l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:remix-js"} {...others} />);
}

export default Component;
