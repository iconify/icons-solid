import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xiq3o6eix.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xiq3o6eix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uis:key-skeleton-alt"} {...others} />);
}

export default Component;
