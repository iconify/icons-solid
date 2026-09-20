import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lycqc1r5r.css';
import '../../css/z/zphee1bbv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lycqc1r5r"/><path class="zphee1bbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:planet-fill"} {...others} />);
}

export default Component;
