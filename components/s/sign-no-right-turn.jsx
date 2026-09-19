import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpb40ebmg.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xpb40ebmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:sign-no-right-turn"} {...others} />);
}

export default Component;
