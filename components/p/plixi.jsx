import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gsvqpqtgj.css';

const viewBox = {"width":320,"height":488};
const content = `<path class="gsvqpqtgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:plixi"} {...others} />);
}

export default Component;
