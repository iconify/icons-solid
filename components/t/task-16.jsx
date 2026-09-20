import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bu2fvpofx.css';
import '../../css/b/bqv8f3bju.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bu2fvpofx"/><path clip-rule="evenodd" class="bqv8f3bju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:task-16"} {...others} />);
}

export default Component;
