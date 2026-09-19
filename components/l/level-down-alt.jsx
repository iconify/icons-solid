import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ag91xjrra.css';

const viewBox = {"width":320,"height":512};
const content = `<path class="ag91xjrra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:level-down-alt"} {...others} />);
}

export default Component;
