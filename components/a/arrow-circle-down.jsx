import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldtu0gu7y.css';
import '../../css/t/tdnjtvgqv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ldtu0gu7y"/><path class="tdnjtvgqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:arrow-circle-down"} {...others} />);
}

export default Component;
