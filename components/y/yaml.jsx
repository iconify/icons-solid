import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tg4wgjwlx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tg4wgjwlx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:yaml"} {...others} />);
}

export default Component;
