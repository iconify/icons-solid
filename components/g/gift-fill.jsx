import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rym_yu0mt.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rym_yu0mt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:gift-fill"} {...others} />);
}

export default Component;
