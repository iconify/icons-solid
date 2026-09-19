import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1tqccbrg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t1tqccbrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:e-bike-2"} {...others} />);
}

export default Component;
