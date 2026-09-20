import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g35dtkbae.css';
import '../../css/n/n7uvfrbje.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g35dtkbae"/><path class="n7uvfrbje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:magic-3-fill"} {...others} />);
}

export default Component;
