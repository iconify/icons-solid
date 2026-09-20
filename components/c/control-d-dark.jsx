import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zae9-mbbq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zae9-mbbq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:control-d-dark"} {...others} />);
}

export default Component;
