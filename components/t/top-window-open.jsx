import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_dm8lvdc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c_dm8lvdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:top-window-open"} {...others} />);
}

export default Component;
