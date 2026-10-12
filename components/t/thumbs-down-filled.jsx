import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oslr7smei.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oslr7smei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:thumbs-down-filled"} {...others} />);
}

export default Component;
