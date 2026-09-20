import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wxrxnizhv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wxrxnizhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"zondicons:backward"} {...others} />);
}

export default Component;
