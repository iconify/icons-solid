import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xa-t1nyfw.css';
import '../../css/z/zjegb3bxf.css';

const viewBox = {"width":12,"height":12};
const content = `<path class="xa-t1nyfw"/><path class="zjegb3bxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:building-stroke-12"} {...others} />);
}

export default Component;
