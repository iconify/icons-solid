import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/a/attqy3b2k.css';
import '../../css/g/gyf239ipz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="attqy3b2k"/><path class="gyf239ipz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:advertisiment"} {...others} />);
}

export default Component;
