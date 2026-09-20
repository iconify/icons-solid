import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ku9hb1yoa.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ku9hb1yoa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:battery-charging-filled"} {...others} />);
}

export default Component;
