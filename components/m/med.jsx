import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lftxn_y7p.css';
import '../../css/c/ct7mdezdi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lftxn_y7p"/><path class="ct7mdezdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:med"} {...others} />);
}

export default Component;
