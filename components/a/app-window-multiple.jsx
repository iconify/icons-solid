import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/z/zyyqrx3az.css';
import '../../css/a/ap-lh0npz.css';
import '../../css/d/dl6__2aed.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="zyyqrx3az"/><path class="ap-lh0npz"/><path class="dl6__2aed"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:app-window-multiple"} {...others} />);
}

export default Component;
