import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3l_n81lx.css';
import '../../css/u/ubgppxb0h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s3l_n81lx"/><path class="ubgppxb0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:oak-identity-dark"} {...others} />);
}

export default Component;
