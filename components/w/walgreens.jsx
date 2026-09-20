import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/llx_gbc1j.css';

const viewBox = {"width":335.72,"height":217.4};
const content = `<path class="llx_gbc1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:walgreens"} {...others} />);
}

export default Component;
