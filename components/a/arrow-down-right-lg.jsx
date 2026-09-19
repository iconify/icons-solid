import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dbwfv4bmi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dbwfv4bmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:arrow-down-right-lg"} {...others} />);
}

export default Component;
