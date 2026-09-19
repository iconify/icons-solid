import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ktr88ac9w.css';

const viewBox = {"width":1025,"height":768};
const content = `<path class="ktr88ac9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:sixteentonine"} {...others} />);
}

export default Component;
