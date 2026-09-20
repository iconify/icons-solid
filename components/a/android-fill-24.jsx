import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hr1fkbc1e.css';
import '../../css/b/b1cbzpwmm.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hr1fkbc1e"/><path class="b1cbzpwmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:android-fill-24"} {...others} />);
}

export default Component;
