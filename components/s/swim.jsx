import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwmlhl6ff.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="fwmlhl6ff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:swim"} {...others} />);
}

export default Component;
