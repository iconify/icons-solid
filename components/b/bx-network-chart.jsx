import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iswl_3bic.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iswl_3bic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-network-chart"} {...others} />);
}

export default Component;
