import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ty4zwew1b.css';
import '../../css/s/sar0t8bmg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ty4zwew1b"/><path class="sar0t8bmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:layer-minus"} {...others} />);
}

export default Component;
