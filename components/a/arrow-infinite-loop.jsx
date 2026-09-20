import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mn6nhnk7c.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="mn6nhnk7c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:arrow-infinite-loop"} {...others} />);
}

export default Component;
