import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/evn9cubmz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="evn9cubmz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:alert-diamond-fill"} {...others} />);
}

export default Component;
