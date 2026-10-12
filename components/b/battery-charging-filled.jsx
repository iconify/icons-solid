import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d0tzg361r.css';
import '../../css/u/ubprlmtat.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d0tzg361r"/><path class="ubprlmtat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:battery-charging-filled"} {...others} />);
}

export default Component;
