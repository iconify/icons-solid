import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hcc_rg86w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hcc_rg86w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:water-flash-fill"} {...others} />);
}

export default Component;
