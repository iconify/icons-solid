import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xo1yws-pd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xo1yws-pd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:signpost-big-filled"} {...others} />);
}

export default Component;
