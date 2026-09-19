import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/ha7cf7b5i.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="ha7cf7b5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:megaphone-fill-12"} {...others} />);
}

export default Component;
