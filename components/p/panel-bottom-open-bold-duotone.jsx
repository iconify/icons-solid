import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nq9rqn1zt.css';
import '../../css/r/rw5qbebuy.css';
import '../../css/n/nad7zgbpt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nq9rqn1zt"/><path class="rw5qbebuy"/><path class="nad7zgbpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panel-bottom-open-bold-duotone"} {...others} />);
}

export default Component;
