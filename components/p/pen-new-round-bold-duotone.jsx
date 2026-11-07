import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hrxlgg64z.css';
import '../../css/i/i6gu3rbfq.css';
import '../../css/z/zxzmymb5g.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="hrxlgg64z"/><path class="i6gu3rbfq"/><path class="zxzmymb5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pen-new-round-bold-duotone"} {...others} />);
}

export default Component;
