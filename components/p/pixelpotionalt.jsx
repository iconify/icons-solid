import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u2cc8ebfn.css';

const viewBox = {"width":768,"height":1024};
const content = `<path class="u2cc8ebfn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:pixelpotionalt"} {...others} />);
}

export default Component;
