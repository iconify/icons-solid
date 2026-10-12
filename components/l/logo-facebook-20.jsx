import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/po9ungb1e.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="po9ungb1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:logo-facebook-20"} {...others} />);
}

export default Component;
