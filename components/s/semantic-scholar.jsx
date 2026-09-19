import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwaudvbpi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hwaudvbpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"academicons:semantic-scholar"} {...others} />);
}

export default Component;
