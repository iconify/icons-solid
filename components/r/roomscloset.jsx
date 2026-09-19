import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzdkvub5h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xzdkvub5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:roomscloset"} {...others} />);
}

export default Component;
