import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qp__ydbjh.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="qp__ydbjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:zoo-uppercase"} {...others} />);
}

export default Component;
