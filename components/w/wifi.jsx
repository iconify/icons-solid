import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy6di_b6h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sy6di_b6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:wifi"} {...others} />);
}

export default Component;
