import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a69cznbzg.css';
import '../../css/c/ckrv68b3g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="a69cznbzg"/><path class="ckrv68b3g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bone-bold-duotone"} {...others} />);
}

export default Component;
