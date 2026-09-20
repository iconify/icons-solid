import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mt_4_ts2l.css';
import '../../css/o/oak52ubup.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mt_4_ts2l"/><path class="oak52ubup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:email-mailbox-close"} {...others} />);
}

export default Component;
