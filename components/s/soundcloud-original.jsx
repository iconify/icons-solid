import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxo1zg92k.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="vxo1zg92k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:soundcloud-original"} {...others} />);
}

export default Component;
