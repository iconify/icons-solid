import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kuw81ib3m.css';

const viewBox = {"width":1025,"height":768};
const content = `<path class="kuw81ib3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:burstmode"} {...others} />);
}

export default Component;
