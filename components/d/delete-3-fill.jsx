import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btuo6vbnw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="btuo6vbnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:delete-3-fill"} {...others} />);
}

export default Component;
