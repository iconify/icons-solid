import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lf_iim5zu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lf_iim5zu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:domain-off"} {...others} />);
}

export default Component;
