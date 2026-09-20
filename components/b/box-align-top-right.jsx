import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uv717kbuk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uv717kbuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:box-align-top-right"} {...others} />);
}

export default Component;
