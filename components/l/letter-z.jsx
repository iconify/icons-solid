import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hiw02y_uk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hiw02y_uk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:letter-z"} {...others} />);
}

export default Component;
