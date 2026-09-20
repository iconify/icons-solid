import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9qvvjnrp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t9qvvjnrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:nintendoswitch"} {...others} />);
}

export default Component;
