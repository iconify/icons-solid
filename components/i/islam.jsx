import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/veoe9mbus.css';
import '../../css/p/pf8dc_bap.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="veoe9mbus"/><path class="pf8dc_bap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:islam"} {...others} />);
}

export default Component;
