import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8j_evhcv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="d8j_evhcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:avocado-filled"} {...others} />);
}

export default Component;
