import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp_nfnigp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mp_nfnigp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:ease-in-control-point-fill"} {...others} />);
}

export default Component;
