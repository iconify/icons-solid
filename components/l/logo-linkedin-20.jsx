import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ultpy5svx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ultpy5svx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:logo-linkedin-20"} {...others} />);
}

export default Component;
