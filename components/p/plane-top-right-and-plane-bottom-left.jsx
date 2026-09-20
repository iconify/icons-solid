import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6_kpfbyj.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k6_kpfbyj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:plane-top-right-and-plane-bottom-left"} {...others} />);
}

export default Component;
