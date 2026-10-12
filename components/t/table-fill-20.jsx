import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zaumeeb-n.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zaumeeb-n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:table-fill-20"} {...others} />);
}

export default Component;
