import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/of51ge8mz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="of51ge8mz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:pin"} {...others} />);
}

export default Component;
