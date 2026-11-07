import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z_zrozxsx.css';
import '../../css/k/k5fmwhakm.css';
import '../../css/p/pq3xuilmm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z_zrozxsx"/><path clip-rule="evenodd" class="k5fmwhakm"/><path clip-rule="evenodd" class="pq3xuilmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:card-transfer-bold"} {...others} />);
}

export default Component;
