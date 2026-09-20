import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h9_jtcbed.css';
import '../../css/b/b1uw7cbks.css';
import '../../css/q/qd2rdm9ve.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h9_jtcbed"/><path class="b1uw7cbks"/><path class="qd2rdm9ve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bridge"} {...others} />);
}

export default Component;
