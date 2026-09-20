import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v84rw7b_r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v84rw7b_r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:twitter-fill"} {...others} />);
}

export default Component;
