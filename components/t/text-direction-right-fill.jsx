import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c2ucr5b7o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c2ucr5b7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:text-direction-right-fill"} {...others} />);
}

export default Component;
