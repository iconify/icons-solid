import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0gx-2k1c.css';
import '../../css/s/slvmq7bsy.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="k0gx-2k1c"/><path clip-rule="evenodd" class="slvmq7bsy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pinepods-light"} {...others} />);
}

export default Component;
