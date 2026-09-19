import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r6kk2jbkn.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="r6kk2jbkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:trash-circle"} {...others} />);
}

export default Component;
