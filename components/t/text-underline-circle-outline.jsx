import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u9tzwj7ok.css';
import '../../css/b/bzy5eobti.css';
import '../../css/f/fhxzx1b_j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u9tzwj7ok"/><path class="bzy5eobti"/><path clip-rule="evenodd" class="fhxzx1b_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-underline-circle-outline"} {...others} />);
}

export default Component;
