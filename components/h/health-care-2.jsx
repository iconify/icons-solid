import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhd9pdbbh.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="zhd9pdbbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:health-care-2"} {...others} />);
}

export default Component;
