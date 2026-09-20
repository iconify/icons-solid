import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cx-wx-b-r.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="cx-wx-b-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:arrow-transfer-diagonal-2"} {...others} />);
}

export default Component;
