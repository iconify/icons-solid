import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ng5_5oycj.css';
import '../../css/p/pt5wbdc-i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="duoicon-secondary-layer ng5_5oycj"/><path class="duoicon-primary-layer pt5wbdc-i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"duo-icons:smartphone-vibration"} {...others} />);
}

export default Component;
