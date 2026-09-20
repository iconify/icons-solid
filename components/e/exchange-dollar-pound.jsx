import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oh4szs_3k.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="oh4szs_3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:exchange-dollar-pound"} {...others} />);
}

export default Component;
