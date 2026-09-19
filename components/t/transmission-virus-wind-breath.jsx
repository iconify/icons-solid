import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j-tbyzo9w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j-tbyzo9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:transmission-virus-wind-breath"} {...others} />);
}

export default Component;
