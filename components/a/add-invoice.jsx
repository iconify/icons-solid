import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dtrm-5ano.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dtrm-5ano"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:add-invoice"} {...others} />);
}

export default Component;
