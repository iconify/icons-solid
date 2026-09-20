import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hdhep31tg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hdhep31tg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"subway:paragraph-3"} {...others} />);
}

export default Component;
