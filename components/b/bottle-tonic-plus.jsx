import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t8ian1c-c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t8ian1c-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bottle-tonic-plus"} {...others} />);
}

export default Component;
