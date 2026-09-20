import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cb9_o8s9v.css';
import '../../css/d/dkpju-4cw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cb9_o8s9v"/><path class="dkpju-4cw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:sweats-fill"} {...others} />);
}

export default Component;
