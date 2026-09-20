import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kr3p3pbwc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kr3p3pbwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:pokemon-go"} {...others} />);
}

export default Component;
