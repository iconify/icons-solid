import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gt-d5tt_t.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="gt-d5tt_t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:signpost-stroke-20"} {...others} />);
}

export default Component;
