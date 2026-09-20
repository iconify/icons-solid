import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b4ld-7b2f.css';
import '../../css/b/b1u7f-d_l.css';
import '../../css/q/qw5i-xb1g.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="b4ld-7b2f"/><path class="b1u7f-d_l"/><path class="qw5i-xb1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-satellite"} {...others} />);
}

export default Component;
