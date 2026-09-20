import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svkmrqn0y.css';
import '../../css/k/kybo6ib7m.css';
import '../../css/g/gbl_k3bbe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="svkmrqn0y"/><path class="kybo6ib7m"/><path class="gbl_k3bbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-id-duotone"} {...others} />);
}

export default Component;
