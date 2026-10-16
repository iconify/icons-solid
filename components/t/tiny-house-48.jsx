import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gap9t0gmp.css';
import '../../css/t/tyua78b5m.css';
import '../../css/d/dvftmgbhg.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gap9t0gmp"/><path class="tyua78b5m"/><path class="dvftmgbhg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tiny-house-48"} {...others} />);
}

export default Component;
