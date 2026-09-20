import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwy_bs32g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kwy_bs32g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:arrow-outline-left"} {...others} />);
}

export default Component;
