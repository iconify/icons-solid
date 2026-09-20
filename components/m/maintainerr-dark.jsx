import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4kr_v9pb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z4kr_v9pb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:maintainerr-dark"} {...others} />);
}

export default Component;
