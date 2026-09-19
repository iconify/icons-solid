import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r58i4harq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r58i4harq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:ring-doorbell-pro"} {...others} />);
}

export default Component;
