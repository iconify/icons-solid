import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrw3m7blk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrw3m7blk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:reolink-trackmix"} {...others} />);
}

export default Component;
