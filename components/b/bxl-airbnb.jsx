import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r5s5n5bxq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r5s5n5bxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-airbnb"} {...others} />);
}

export default Component;
