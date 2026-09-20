import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/abxsb9t-e.css';
import '../../css/g/gj1ihwbcf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="abxsb9t-e"/><path clip-rule="evenodd" class="gj1ihwbcf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:user-visible-fill"} {...others} />);
}

export default Component;
