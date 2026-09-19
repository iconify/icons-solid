import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r2u2kvb1l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r2u2kvb1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-objects-vertical-bottom"} {...others} />);
}

export default Component;
