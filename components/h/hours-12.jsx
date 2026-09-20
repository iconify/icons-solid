import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lm6wcbchz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lm6wcbchz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:hours-12"} {...others} />);
}

export default Component;
