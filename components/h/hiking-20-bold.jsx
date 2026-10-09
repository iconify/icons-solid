import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r9jgtejbn.css';
import '../../css/e/ekd7jsf_c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="r9jgtejbn"/><path class="ekd7jsf_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hiking-20-bold"} {...others} />);
}

export default Component;
