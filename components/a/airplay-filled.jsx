import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aoeatstfv.css';
import '../../css/l/l06m6xpen.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="aoeatstfv"/><path class="l06m6xpen"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:airplay-filled"} {...others} />);
}

export default Component;
