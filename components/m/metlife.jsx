import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x0qnneyrt.css';

const viewBox = {"width":88.46,"height":21.17};
const content = `<path class="x0qnneyrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:metlife"} {...others} />);
}

export default Component;
