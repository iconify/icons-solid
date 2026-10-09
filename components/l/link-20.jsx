import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zcwdncb4h.css';
import '../../css/t/to1elzbsg.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="zcwdncb4h"/><path class="to1elzbsg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:link-20"} {...others} />);
}

export default Component;
