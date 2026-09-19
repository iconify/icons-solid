import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bvi0ffils.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bvi0ffils"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:sign-turn-slight-left-fill"} {...others} />);
}

export default Component;
