import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/punal9bvt.css';

const viewBox = {"width":819,"height":661};
const content = `<path class="punal9bvt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:wifi"} {...others} />);
}

export default Component;
