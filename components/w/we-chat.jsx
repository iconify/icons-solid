import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rptrf_b-m.css';
import '../../css/p/pghzzobog.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rptrf_b-m"/><path class="pghzzobog"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:we-chat"} {...others} />);
}

export default Component;
