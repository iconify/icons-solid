import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sbvbi9oey.css';
import '../../css/l/lp7eaq79j.css';
import '../../css/n/n1xy6nh9u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sbvbi9oey"/><path class="lp7eaq79j"/><circle class="n1xy6nh9u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:joystick-button"} {...others} />);
}

export default Component;
