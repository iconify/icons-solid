import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/brz56sb1o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="brz56sb1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:table-cells-split-filled"} {...others} />);
}

export default Component;
