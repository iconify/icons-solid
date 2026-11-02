import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dqec9l1pe.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dqec9l1pe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:folder-locked-2-fill"} {...others} />);
}

export default Component;
