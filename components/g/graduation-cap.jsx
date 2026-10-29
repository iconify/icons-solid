import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/caw3fktbl.css';
import '../../css/k/k_3k7ab8h.css';
import '../../css/t/tsntq4fba.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="caw3fktbl"/><path class="k_3k7ab8h"/><path class="tsntq4fba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:graduation-cap"} {...others} />);
}

export default Component;
