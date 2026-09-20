import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g6n0u6b1g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g6n0u6b1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:comments-alt"} {...others} />);
}

export default Component;
