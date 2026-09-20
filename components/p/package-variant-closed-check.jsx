import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iw6b44bqp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iw6b44bqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:package-variant-closed-check"} {...others} />);
}

export default Component;
