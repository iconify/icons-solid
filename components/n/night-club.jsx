import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c0k6s5bai.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="c0k6s5bai"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:night-club"} {...others} />);
}

export default Component;
