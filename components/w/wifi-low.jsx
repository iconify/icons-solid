import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vr3uzyz3y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vr3uzyz3y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:wifi-low"} {...others} />);
}

export default Component;
