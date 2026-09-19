import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zh4riuv9c.css';
import '../../css/c/cw8brcc2n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zh4riuv9c"/><path class="cw8brcc2n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:bullseye"} {...others} />);
}

export default Component;
