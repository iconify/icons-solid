import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wey8zoa3m.css';
import '../../css/v/vcmk6cc8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wey8zoa3m"/><path class="vcmk6cc8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:messages-circle-filled"} {...others} />);
}

export default Component;
