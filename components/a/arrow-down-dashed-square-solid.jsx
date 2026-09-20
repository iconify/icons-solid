import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kq1of3eyr.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="kq1of3eyr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:arrow-down-dashed-square-solid"} {...others} />);
}

export default Component;
