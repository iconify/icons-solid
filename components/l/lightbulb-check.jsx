import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbv90cc1h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cbv90cc1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:lightbulb-check"} {...others} />);
}

export default Component;
