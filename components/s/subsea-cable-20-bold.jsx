import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z-lmr9bkb.css';
import '../../css/t/tk7jp-bls.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="z-lmr9bkb"/><path class="tk7jp-bls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:subsea-cable-20-bold"} {...others} />);
}

export default Component;
