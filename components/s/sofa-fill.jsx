import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/auvu2r1ra.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="auvu2r1ra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:sofa-fill"} {...others} />);
}

export default Component;
