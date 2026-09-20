import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/da6q-edbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="da6q-edbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:cloud-sun"} {...others} />);
}

export default Component;
