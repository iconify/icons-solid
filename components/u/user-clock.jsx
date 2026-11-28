import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3p4ubeee.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v3p4ubeee"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:user-clock"} {...others} />);
}

export default Component;
