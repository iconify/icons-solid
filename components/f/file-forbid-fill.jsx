import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghylczb-n.css';
import '../../css/s/svi8x9byo.css';
import '../../css/d/dj90s9bvc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ghylczb-n"/><path class="svi8x9byo"/><path clip-rule="evenodd" class="dj90s9bvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:file-forbid-fill"} {...others} />);
}

export default Component;
