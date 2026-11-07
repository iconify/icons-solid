import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h3h0_zb2o.css';
import '../../css/n/n3pz-6bxt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="h3h0_zb2o"/><path class="n3pz-6bxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:archive-down-minimalistic-bold"} {...others} />);
}

export default Component;
