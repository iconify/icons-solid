import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s3b4blbrq.css';
import '../../css/b/bo9dr7buy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s3b4blbrq"/><path class="bo9dr7buy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-flag-checkered"} {...others} />);
}

export default Component;
