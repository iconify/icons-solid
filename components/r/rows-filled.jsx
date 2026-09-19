import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke_bx8-uq.css';
import '../../css/m/mqx34y6qf.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="ke_bx8-uq"/><rect class="mqx34y6qf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:rows-filled"} {...others} />);
}

export default Component;
