import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pvt-fvj0a.css';
import '../../css/h/hxwzeibnw.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="pvt-fvj0a"/><path class="hxwzeibnw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:basket-plus-stroke-20"} {...others} />);
}

export default Component;
