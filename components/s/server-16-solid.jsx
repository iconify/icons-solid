import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mc_8i2kot.css';
import '../../css/c/cljz3cbsp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mc_8i2kot"/><path clip-rule="evenodd" class="cljz3cbsp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"heroicons:server-16-solid"} {...others} />);
}

export default Component;
