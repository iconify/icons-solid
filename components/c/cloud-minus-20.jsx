import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjuk3kbct.css';
import '../../css/g/gr80gyb-f.css';
import '../../css/a/a--uzxbtp.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="hjuk3kbct"/><path class="gr80gyb-f"/><path class="a--uzxbtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloud-minus-20"} {...others} />);
}

export default Component;
