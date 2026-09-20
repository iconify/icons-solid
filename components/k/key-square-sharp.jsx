import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m-irwm9cw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m-irwm9cw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:key-square-sharp"} {...others} />);
}

export default Component;
