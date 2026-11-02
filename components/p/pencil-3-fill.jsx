import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ll2fk6ncl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ll2fk6ncl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:pencil-3-fill"} {...others} />);
}

export default Component;
