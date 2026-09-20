import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q5h-4ccku.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q5h-4ccku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:seat-fill"} {...others} />);
}

export default Component;
