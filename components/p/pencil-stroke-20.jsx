import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3fa6r4bv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="q3fa6r4bv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:pencil-stroke-20"} {...others} />);
}

export default Component;
