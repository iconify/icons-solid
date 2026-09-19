import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6w6e1bxz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c6w6e1bxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:roller-shutter-switch"} {...others} />);
}

export default Component;
