import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/udf-wzd9w.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="udf-wzd9w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:arrow-up-circle"} {...others} />);
}

export default Component;
