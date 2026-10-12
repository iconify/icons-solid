import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gscxrkdyg.css';
import '../../css/d/du48p_lje.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gscxrkdyg"/><path clip-rule="evenodd" class="du48p_lje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:navigation-2-off-filled"} {...others} />);
}

export default Component;
