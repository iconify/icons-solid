import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ezq_5gb1n.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ezq_5gb1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:table-solid"} {...others} />);
}

export default Component;
