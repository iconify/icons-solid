import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oda7t_bbe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oda7t_bbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:love-seat"} {...others} />);
}

export default Component;
