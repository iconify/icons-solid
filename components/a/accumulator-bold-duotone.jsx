import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u77j4kbnz.css';
import '../../css/c/c-z8pxbpl.css';
import '../../css/h/hrh2fcbcf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u77j4kbnz"/><path clip-rule="evenodd" class="c-z8pxbpl"/><path class="hrh2fcbcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:accumulator-bold-duotone"} {...others} />);
}

export default Component;
