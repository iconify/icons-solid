import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irs-1rb8o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="irs-1rb8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:approximately-equal"} {...others} />);
}

export default Component;
