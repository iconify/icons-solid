import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9xtl1ttf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a9xtl1ttf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:phone-missed-fill-round"} {...others} />);
}

export default Component;
