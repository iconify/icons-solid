import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ggdj-rbkr.css';
import '../../css/d/d4aj_070k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ggdj-rbkr"/><circle class="d4aj_070k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:palette-2-line"} {...others} />);
}

export default Component;
