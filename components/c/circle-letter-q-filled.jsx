import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3__ojbef.css';
import '../../css/d/dwrhhxelk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b3__ojbef"/><path clip-rule="evenodd" class="dwrhhxelk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-letter-q-filled"} {...others} />);
}

export default Component;
