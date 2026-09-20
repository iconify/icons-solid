import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4fw1mb4o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c4fw1mb4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:exchange-funds-line"} {...others} />);
}

export default Component;
