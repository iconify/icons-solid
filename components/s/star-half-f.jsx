import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rf6wqpb7k.css';

const viewBox = {"width":10,"height":19};
const content = `<path class="rf6wqpb7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:star-half-f"} {...others} />);
}

export default Component;
