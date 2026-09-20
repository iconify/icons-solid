import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fw9y5ibzh.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="fw9y5ibzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:lego"} {...others} />);
}

export default Component;
