import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vjvd0-bgn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vjvd0-bgn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:qr-code-search"} {...others} />);
}

export default Component;
