import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zn5rgey5y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zn5rgey5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:grid-lines"} {...others} />);
}

export default Component;
