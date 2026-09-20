import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ta49vmcof.css';
import '../../css/k/k7ke_eb9r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ta49vmcof"/><path class="k7ke_eb9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smiley-wink"} {...others} />);
}

export default Component;
