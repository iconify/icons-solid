import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2_u9j41c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f2_u9j41c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:sign-turn-right-fill"} {...others} />);
}

export default Component;
