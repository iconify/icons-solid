import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnk_oc_5j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dnk_oc_5j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:edge-new-line"} {...others} />);
}

export default Component;
