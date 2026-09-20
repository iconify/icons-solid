import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ci6-fubhr.css';
import '../../css/v/vqmzdlotb.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="ci6-fubhr"/><path class="vqmzdlotb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:8mb-local"} {...others} />);
}

export default Component;
