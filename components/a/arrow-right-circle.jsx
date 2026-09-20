import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rnq8zkb6c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="rnq8zkb6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:arrow-right-circle"} {...others} />);
}

export default Component;
