import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kr5qu_bcy.css';
import '../../css/d/dnb3cibqn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kr5qu_bcy"/><path clip-rule="evenodd" class="dnb3cibqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:playing-cards-filled"} {...others} />);
}

export default Component;
