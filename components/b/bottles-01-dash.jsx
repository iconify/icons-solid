import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4bbxcc8y.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="o4bbxcc8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:bottles-01-dash"} {...others} />);
}

export default Component;
