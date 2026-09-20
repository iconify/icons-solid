import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ch5nr5ubw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ch5nr5ubw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:television-stop"} {...others} />);
}

export default Component;
