import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ho9c_64qe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ho9c_64qe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:envelope-fast-outline"} {...others} />);
}

export default Component;
