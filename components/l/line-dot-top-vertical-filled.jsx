import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lz7qxycvm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lz7qxycvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:line-dot-top-vertical-filled"} {...others} />);
}

export default Component;
