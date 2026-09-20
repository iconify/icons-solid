import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-pocwb_q.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="h-pocwb_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-block:basic-ui-toggle"} {...others} />);
}

export default Component;
