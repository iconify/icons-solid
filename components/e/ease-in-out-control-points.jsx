import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hl6g3-bfc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hl6g3-bfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:ease-in-out-control-points"} {...others} />);
}

export default Component;
