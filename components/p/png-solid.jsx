import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bohhjnb0p.css';
import '../../css/h/hstms5foq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bohhjnb0p"/><path clip-rule="evenodd" class="hstms5foq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:png-solid"} {...others} />);
}

export default Component;
