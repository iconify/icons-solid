import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2dnpkjjq.css';
import '../../css/z/z456xsbyc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i2dnpkjjq"/><path class="z456xsbyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:square-chev-up"} {...others} />);
}

export default Component;
