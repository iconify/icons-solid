import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzlt_3t1p.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="wzlt_3t1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:align-right-flat"} {...others} />);
}

export default Component;
