import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m6qo4yo6a.css';

const viewBox = {"width":320,"height":512};
const content = `<path class="m6qo4yo6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:chess-bishop"} {...others} />);
}

export default Component;
