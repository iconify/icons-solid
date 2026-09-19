import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_t84-b5u.css';
import '../../css/x/xnh2fcnbn.css';
import '../../css/j/j74rlwb-z.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="clr-i-solid clr-i-solid-path-1 x_t84-b5u"/><path class="clr-i-solid clr-i-solid-path-2 xnh2fcnbn"/><path class="clr-i-solid clr-i-solid-path-3 j74rlwb-z"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:world-solid"} {...others} />);
}

export default Component;
