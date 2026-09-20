import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1nvh3bro.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="k1nvh3bro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:leaf-above-outstretched-hand"} {...others} />);
}

export default Component;
