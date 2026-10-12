import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hx7ywibap.css';
import '../../css/l/l7g6jsgpq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hx7ywibap"/><path clip-rule="evenodd" class="l7g6jsgpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:panel-bottom-close-filled"} {...others} />);
}

export default Component;
