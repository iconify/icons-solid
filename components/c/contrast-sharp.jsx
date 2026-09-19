import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cq8haq6el.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cq8haq6el"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:contrast-sharp"} {...others} />);
}

export default Component;
