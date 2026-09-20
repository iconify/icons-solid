import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/beb4umbqn.css';
import '../../css/o/ol2kopnbl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="beb4umbqn"/><path class="ol2kopnbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:hammer-duotone"} {...others} />);
}

export default Component;
