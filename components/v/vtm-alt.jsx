import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2tl-bmmo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c2tl-bmmo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:vtm-alt"} {...others} />);
}

export default Component;
