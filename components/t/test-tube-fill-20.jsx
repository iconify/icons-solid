import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kmx_sxbxs.css';
import '../../css/c/c582bi82c.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kmx_sxbxs"/><path class="c582bi82c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:test-tube-fill-20"} {...others} />);
}

export default Component;
