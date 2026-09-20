import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u_6hk7b1e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u_6hk7b1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:more-1-fill"} {...others} />);
}

export default Component;
