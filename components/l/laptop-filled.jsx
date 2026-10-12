import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bixg4h3ck.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bixg4h3ck"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:laptop-filled"} {...others} />);
}

export default Component;
