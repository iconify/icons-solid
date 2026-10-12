import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/veaxrgwgs.css';
import '../../css/o/op-da8bcv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="veaxrgwgs"/><path clip-rule="evenodd" class="op-da8bcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:square-pilcrow-filled"} {...others} />);
}

export default Component;
