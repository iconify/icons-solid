import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qkn0u6z1h.css';
import '../../css/z/zcm3eh2ia.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qkn0u6z1h"/><path class="zcm3eh2ia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:person-plus-stroke-20"} {...others} />);
}

export default Component;
