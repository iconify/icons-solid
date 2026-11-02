import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sucw5zbdx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sucw5zbdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:codepen-fill"} {...others} />);
}

export default Component;
