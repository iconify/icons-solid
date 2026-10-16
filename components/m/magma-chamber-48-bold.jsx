import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pivyf-bap.css';
import '../../css/e/eo4t4pbyn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="pivyf-bap"/><path class="eo4t4pbyn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:magma-chamber-48-bold"} {...others} />);
}

export default Component;
