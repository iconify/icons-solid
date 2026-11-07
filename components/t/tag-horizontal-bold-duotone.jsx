import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/opx7yx7he.css';
import '../../css/e/ecc5nebhy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="opx7yx7he"/><path class="ecc5nebhy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:tag-horizontal-bold-duotone"} {...others} />);
}

export default Component;
