import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l4-_1ab-p.css';

const viewBox = {"width":1664,"height":1792};
const content = `<path class="l4-_1ab-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:calculator"} {...others} />);
}

export default Component;
