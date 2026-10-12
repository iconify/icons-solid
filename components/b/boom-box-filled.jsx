import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/muotlpbym.css';
import '../../css/w/ws98rr2bv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="muotlpbym"/><path clip-rule="evenodd" class="ws98rr2bv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:boom-box-filled"} {...others} />);
}

export default Component;
