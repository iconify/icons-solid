import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ofm3hvbng.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ofm3hvbng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:folder-open-2-fill"} {...others} />);
}

export default Component;
