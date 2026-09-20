import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flkqr0bqp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="flkqr0bqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:money3-filled"} {...others} />);
}

export default Component;
