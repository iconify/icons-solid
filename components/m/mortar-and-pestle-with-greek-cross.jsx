import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cj_2pto_n.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="cj_2pto_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:mortar-and-pestle-with-greek-cross"} {...others} />);
}

export default Component;
