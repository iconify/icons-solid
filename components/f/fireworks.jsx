import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a90eyi3wb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a90eyi3wb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:fireworks"} {...others} />);
}

export default Component;
