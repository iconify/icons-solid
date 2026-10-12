import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9zz_l4jl.css';
import '../../css/m/m8f41sb6p.css';
import '../../css/c/cnvsi8cop.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="y9zz_l4jl"/><path class="m8f41sb6p"/><path class="cnvsi8cop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:dna-48-bold"} {...others} />);
}

export default Component;
