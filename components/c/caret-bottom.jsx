import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eb2m02b9a.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="eb2m02b9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oi:caret-bottom"} {...others} />);
}

export default Component;
