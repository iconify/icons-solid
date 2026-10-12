import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m71bvmvxt.css';
import '../../css/j/ju3sbspwg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="m71bvmvxt"/><path class="ju3sbspwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:party-popper-filled"} {...others} />);
}

export default Component;
