import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpgtr6bum.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qpgtr6bum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:planet-fill"} {...others} />);
}

export default Component;
