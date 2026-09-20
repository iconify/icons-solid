import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h6rk79b1f.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h6rk79b1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:analytics-pie-3-bold"} {...others} />);
}

export default Component;
