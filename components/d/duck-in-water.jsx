import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xt8s8dbkh.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="xt8s8dbkh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:duck-in-water"} {...others} />);
}

export default Component;
