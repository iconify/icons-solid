import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m22iwcsgw.css';
import '../../css/d/dg1dhqmqv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="m22iwcsgw"/><path class="dg1dhqmqv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-path-bold-duotone"} {...others} />);
}

export default Component;
