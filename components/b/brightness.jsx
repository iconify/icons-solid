import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0n8qekfx.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="c0n8qekfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:brightness"} {...others} />);
}

export default Component;
