import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/slb2x7b6x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="slb2x7b6x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:skip-forward-filled"} {...others} />);
}

export default Component;
