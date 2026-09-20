import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xq2m70lut.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="xq2m70lut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:sedan-with-raised-hood"} {...others} />);
}

export default Component;
