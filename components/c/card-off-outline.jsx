import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tdttxe_0o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tdttxe_0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:card-off-outline"} {...others} />);
}

export default Component;
