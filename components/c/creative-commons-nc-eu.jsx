import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gtdx1lb8q.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="gtdx1lb8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:creative-commons-nc-eu"} {...others} />);
}

export default Component;
