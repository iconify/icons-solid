import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ex_e1-b4y.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ex_e1-b4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:arrowheads-right-chevron"} {...others} />);
}

export default Component;
