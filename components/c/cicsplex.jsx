import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oy2kxn1ne.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="oy2kxn1ne"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:cicsplex"} {...others} />);
}

export default Component;
