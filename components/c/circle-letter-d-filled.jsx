import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vi7p1wbtw.css';
import '../../css/w/w5e400bvs.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vi7p1wbtw"/><path clip-rule="evenodd" class="w5e400bvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:circle-letter-d-filled"} {...others} />);
}

export default Component;
