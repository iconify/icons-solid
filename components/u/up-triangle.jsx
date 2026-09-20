import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uhw8w_bvv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="uhw8w_bvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:up-triangle"} {...others} />);
}

export default Component;
