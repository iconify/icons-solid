import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hnp2z7g5d.css';
import '../../css/x/x-w7n4-xc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="hnp2z7g5d"/><path class="x-w7n4-xc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:book-bookmark-filled"} {...others} />);
}

export default Component;
