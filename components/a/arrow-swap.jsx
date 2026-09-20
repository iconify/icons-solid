import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t85m2jm9p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t85m2jm9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:arrow-swap"} {...others} />);
}

export default Component;
