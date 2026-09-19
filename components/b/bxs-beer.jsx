import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eu-pq6b1d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eu-pq6b1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-beer"} {...others} />);
}

export default Component;
