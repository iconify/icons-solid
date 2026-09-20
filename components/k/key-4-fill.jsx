import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7mumeb-d.css';
import '../../css/u/uri7qm5ui.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="m7mumeb-d"/><path class="uri7qm5ui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:key-4-fill"} {...others} />);
}

export default Component;
