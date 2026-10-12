import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xaqgxrbrf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="xaqgxrbrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:text-20"} {...others} />);
}

export default Component;
