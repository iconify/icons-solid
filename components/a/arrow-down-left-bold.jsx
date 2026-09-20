import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fck5xk6ae.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fck5xk6ae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:arrow-down-left-bold"} {...others} />);
}

export default Component;
