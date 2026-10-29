import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rzf2slbcj.css';
import '../../css/w/w1o9hzlef.css';
import '../../css/l/lh2qbzpry.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rzf2slbcj wm-k"/><path class="w1o9hzlef wm-k"/><path class="lh2qbzpry wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:gold-ingot"} {...others} />);
}

export default Component;
