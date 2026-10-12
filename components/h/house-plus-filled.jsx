import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y53soubyt.css';
import '../../css/o/o604fd26w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y53soubyt"/><path class="o604fd26w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:house-plus-filled"} {...others} />);
}

export default Component;
