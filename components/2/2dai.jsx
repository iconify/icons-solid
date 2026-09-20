import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/op6-5trqx.css';
import '../../css/k/kufg_y_4u.css';
import '../../css/d/dl849rwsk.css';
import '../../css/u/uh_58qkir.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="op6-5trqx"/><path class="kufg_y_4u"/><path clip-rule="evenodd" class="dl849rwsk"/><path clip-rule="evenodd" class="uh_58qkir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:2dai"} {...others} />);
}

export default Component;
