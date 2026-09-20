import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcqte1bgj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bcqte1bgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"roentgen:t-shirt-and-scissors"} {...others} />);
}

export default Component;
