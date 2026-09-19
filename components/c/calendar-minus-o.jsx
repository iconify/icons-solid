import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mag9m6fqq.css';

const viewBox = {"width":1664,"height":1792};
const content = `<path class="mag9m6fqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:calendar-minus-o"} {...others} />);
}

export default Component;
