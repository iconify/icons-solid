import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ew50tebjg.css';
import '../../css/n/n4qsi-ucz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ew50tebjg"/><path class="n4qsi-ucz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:star-x-filled"} {...others} />);
}

export default Component;
