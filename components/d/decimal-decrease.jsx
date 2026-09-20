import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o2lq4ibgp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o2lq4ibgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:decimal-decrease"} {...others} />);
}

export default Component;
