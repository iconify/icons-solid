import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hmt67jnfv.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="hmt67jnfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:kerb-lowered"} {...others} />);
}

export default Component;
