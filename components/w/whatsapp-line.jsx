import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azosf2fdp.css';
import '../../css/f/folb2v_pu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="azosf2fdp"/><path clip-rule="evenodd" class="folb2v_pu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:whatsapp-line"} {...others} />);
}

export default Component;
