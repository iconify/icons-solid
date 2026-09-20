import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hw-7a5b3x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hw-7a5b3x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:focus-target"} {...others} />);
}

export default Component;
