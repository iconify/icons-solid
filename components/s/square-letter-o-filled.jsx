import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fn62sxfmg.css';
import '../../css/v/vyx2y7bdd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fn62sxfmg"/><path clip-rule="evenodd" class="vyx2y7bdd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-letter-o-filled"} {...others} />);
}

export default Component;
