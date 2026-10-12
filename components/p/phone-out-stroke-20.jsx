import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rrjmnmpml.css';
import '../../css/j/juwohhbzs.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="rrjmnmpml"/><path class="juwohhbzs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:phone-out-stroke-20"} {...others} />);
}

export default Component;
