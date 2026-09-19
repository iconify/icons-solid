import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tvca9t96l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tvca9t96l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:quote-alt-left"} {...others} />);
}

export default Component;
