import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ixlrgdmxl.css';
import '../../css/i/ifen1pnqi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ixlrgdmxl"/><path class="ifen1pnqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:search-x"} {...others} />);
}

export default Component;
